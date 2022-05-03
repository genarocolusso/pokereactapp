import { debounce } from "lodash";
import React, { createContext, ReactNode, useEffect, useState, useReducer } from "react";
import { usePokemon } from "../services/hooks/usePokemon";
import { QueryEffects } from "../types/queryTypes";
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { initialState, pokemon_actions, reducer } from "./reducer";


export interface pokemonInterface {
    id: string,
    name: string,
    type: string[],
    sprite: string[], 
    isShiny: boolean,
  }
  const MAX_AGE = 30 * 24 * 60 * 60;
  const DEFAULT_VALUE = {
    id: "",
    name: "",
    type: [" "],
    sprite: [" "], 
    isShiny: false,
  }
type pokemonContextData = {
    pokemons: pokemonInterface[],
    handlePokemonTeam: (pokemon : pokemonInterface) => void,
    setShiny: (shiny: boolean, index: number) => void,
    showpokemon: pokemonInterface,
    handleSetShowPokemon: (pokemon : pokemonInterface) => void,
    handlerSearch: (id: string) => void,
    handleDeletePokeTeam: () => void,
    handleRemovePokemon: (id: string) => void,
  } & QueryEffects;
 
  interface ProviderProps {
    children: ReactNode;
  }

 
//omit remove
//pick adds
  
export const PokemonTeamContext = createContext({} as pokemonContextData)


export const PokemonTeamContextProvider = (props : ProviderProps) =>{
  const { pokemonTeam: pokemonTeamCookie } = parseCookies();
  const [pokemons, dispatch] = useReducer(reducer,initialState)
  //const [pokemons, setPokemons] = useState<pokemonInterface[]>([]);
  const [showpokemon, setShowpokemon] = useState<pokemonInterface>(DEFAULT_VALUE);
  const [pokemonSearch, setPokemonSearch ] = useState<number>(1);

  const { data, isLoading, isFetching, error } = usePokemon(pokemonSearch);

  useEffect(() => {
    if(data)
    setShowpokemon(data?.pokemon);
  }, [data]);

  useEffect(() => {
    if (pokemonTeamCookie) {
      const cookieTeam : pokemonInterface[] =
        JSON.parse(pokemonTeamCookie);
        //setPokemons(cookieTeam);
        dispatch({ type: pokemon_actions.LOAD_TEAM, Team:cookieTeam });
    }  
  }, []) 
 
  useEffect(()=>{ 
    if(pokemons.length>0){
      setCookie(
        undefined,
        "pokemonTeam",
        JSON.stringify(pokemons),
        {
          maxAge: MAX_AGE,
          path: "/",
        }
      );
      } 
  },[pokemons])

    const handlePokemonTeam =(pokemon : pokemonInterface) => {    
      dispatch({ type: pokemon_actions.ADD_POKEMON, pokemon });
     
    }

    const handleSetShowPokemon = (pokemon: pokemonInterface) =>{
         setShowpokemon(pokemon);
    }
    
    const handleDeletePokeTeam = () => {
      destroyCookie(null, 'pokemonTeam')
      dispatch({ type: pokemon_actions.DELETE_TEAM });
    }
        
    const handleRemovePokemon = (id) => { 
      dispatch({ type: pokemon_actions.REMOVE_POKEMON , id});
    }   
    const handlerSearch = (id : string) => 
    { 
      setPokemonSearch(parseInt(id))
    };

    const setShiny = (shiny: boolean, index: number) => { 
        const newPokemons = [...pokemons]
        const changeShiny = newPokemons.map( (pokemon,i)=> { 
          if(i === index){
          pokemon.isShiny = shiny;
           }
          return pokemon;
      })

      dispatch({ type: pokemon_actions.LOAD_TEAM, Team: changeShiny  });
             
    }


    const values = { 
      pokemons, 
      handlePokemonTeam, 
      setShiny, 
      showpokemon, 
      handleSetShowPokemon, 
      handlerSearch,
      handleDeletePokeTeam,
      handleRemovePokemon,
      isLoading, 
      isFetching, 
      error
    }

    return (
        <PokemonTeamContext.Provider value={values}>
            {props.children}
        </PokemonTeamContext.Provider>
    )
}