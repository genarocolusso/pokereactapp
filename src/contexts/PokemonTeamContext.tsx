import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useReducer,
} from "react";
import { usePokemon } from "../services/hooks/usePokemon";
import { QueryEffects } from "../types/queryTypes";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { initialState, pokemon_actions, reducer } from "./reducer";

export interface pokemonInterface {
  id: string;
  name: string;
  type: string[];
  typeurl: string[];
  sprite: string[];
  isShiny: boolean;
}

export interface pokemonTeam {
  data: pokemonInterface[];
  teamNumber: number;
}
export interface pokemonUserStateType {
  pokemonTeams: pokemonTeam[];
  currentTeam: pokemonTeam;
}

const MAX_AGE = 30 * 24 * 60 * 60;
const DEFAULT_VALUE = {
  id: "",
  name: "",
  type: [""],
  typeurl: [""],
  sprite: [" "],
  isShiny: false,
};
type pokemonContextData = {
  pokemonUserState: pokemonUserStateType;
  handleAddPokeTeam: (pokemons: pokemonTeam) => void;
  handlePokemonTeam: (pokemon: pokemonInterface) => void;
  handleLoadTeam: (pokemonTeam: pokemonTeam) => void;
  setShiny: (shiny: boolean, index: string) => void;
  showpokemon: pokemonInterface;
  handleSetShowPokemon: (pokemon: pokemonInterface) => void;
  handlerSearch: (id: string) => void;
  handleDeletePokeTeam: (index: string | number) => void;
  handleRemovePokemon: (id: string) => void;
} & QueryEffects;

interface ProviderProps {
  children: ReactNode;
}

export const PokemonTeamContext = createContext({} as pokemonContextData);

export const PokemonTeamContextProvider = (props: ProviderProps) => {
  const { pokemonTeam: pokemonTeamCookie, myTeams: myTeamCookie } =
    parseCookies();
  const [pokemonUserState, dispatch] = useReducer(reducer, initialState);

  const { pokemonTeams, currentTeam: pokemons } = pokemonUserState;

  const [showpokemon, setShowpokemon] =
    useState<pokemonInterface>(DEFAULT_VALUE);
  const [pokemonSearch, setPokemonSearch] = useState<string>(`1`);

  const { data, isLoading, isFetching, error } = usePokemon(pokemonSearch);

  useEffect(() => {
    console.log(pokemonTeams);
    if (data) {
      setShowpokemon(data?.pokemon);
    }
  }, [data]);

  useEffect(() => {
    if (pokemonTeamCookie) {
      const cookieTeam: pokemonInterface[] = JSON.parse(pokemonTeamCookie);
      dispatch({
        type: pokemon_actions.LOAD_TEAM,
        payload: { Team: cookieTeam, Number: 0 },
      });
    }

    if (localStorage.getItem("myTeams")) {
      const teamsCookie: pokemonTeam[] =
        JSON.parse(localStorage.getItem("myTeams")) || [];

      dispatch({
        type: pokemon_actions.LOAD_MY_TEAMS,
        pokemonTeams: teamsCookie,
      });
    }
  }, []);

  useEffect(() => {
    console.log(" pokemonstate changed", pokemonUserState);
    if (pokemons?.data?.length > 0) {
      setCookie(undefined, "pokemonTeam", JSON.stringify(pokemons.data), {
        maxAge: MAX_AGE,
        path: "/",
      });
    }

    if (pokemonUserState.pokemonTeams.length > 0) {
      console.log(" poketeam changed", pokemonUserState);
      localStorage.setItem(
        "myTeams",
        JSON.stringify(pokemonUserState.pokemonTeams)
      );
      setCookie(
        undefined,
        "myTeams",
        JSON.stringify(pokemonUserState.pokemonTeams),
        {
          maxAge: MAX_AGE,
          path: "/",
        }
      );
    }
  }, [pokemons, pokemonUserState.pokemonTeams]);

  const handlePokemonTeam = (pokemon: pokemonInterface) => {
    console.log(pokemons);
    const allPokeIds = pokemons.data.map((pokemon) => pokemon.id);
    const hasAlready = allPokeIds.includes(pokemon.id);
    const newPokemon = { ...pokemon };
    if (pokemons?.data?.length < 6 && !hasAlready) {
      dispatch({ type: pokemon_actions.ADD_POKEMON, newPokemon });
    }
  };

  const handleSetShowPokemon = (pokemon: pokemonInterface) => {
    setShowpokemon(pokemon);
  };

  const handleDeletePokeTeam = (index: string | number) => {
    destroyCookie(null, "pokemonTeam");
    if (index == 0 && pokemonUserState.pokemonTeams.length == 1)
      destroyCookie(null, "myTeams");
    dispatch({ type: pokemon_actions.DELETE_TEAM, index });
  };

  const handleLoadTeam = (pokemonteam: pokemonTeam) => {
    dispatch({
      type: pokemon_actions.LOAD_TEAM,
      payload: { Team: pokemonteam.data, Number: pokemonteam.teamNumber },
    });
  };
  const handleRemovePokemon = (id) => {
    dispatch({ type: pokemon_actions.REMOVE_POKEMON, id });
  };

  const handlerSearch = (id: string) => {
    setPokemonSearch(id);
  };

  const handleAddPokeTeam = (pokemons: pokemonTeam) => {
    console.log(pokemons);
    if (pokemons.data.length > 0)
      dispatch({
        type: pokemon_actions.SAVE_TEAM,
        pokemonsTeam: { ...pokemons },
      });
  };

  const setShiny = (shiny: boolean, id: string) => {
    dispatch({
      type: pokemon_actions.SET_CURRENT_SHINY,
      Team: { id: id, isShiny: shiny },
    });
  };

  const values = {
    pokemonUserState,
    handlePokemonTeam,
    handleAddPokeTeam,
    handleLoadTeam,
    setShiny,
    showpokemon,
    handleSetShowPokemon,
    handlerSearch,
    handleDeletePokeTeam,
    handleRemovePokemon,
    isLoading,
    isFetching,
    error,
  };

  return (
    <PokemonTeamContext.Provider value={values}>
      {props.children}
    </PokemonTeamContext.Provider>
  );
};
