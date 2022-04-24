import { debounce } from "lodash";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { usePokemon } from "../services/hooks/usePokemon";
import { QueryEffects } from "../types/queryTypes";
import { parseCookies, setCookie, destroyCookie } from 'nookies'

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
  } & QueryEffects;
 
  interface ProviderProps {
    children: ReactNode;
  }

 
//omit remove
//pick adds
  
export const PokemonTeamContext = createContext({} as pokemonContextData)


export const PokemonTeamContextProvider = (props : ProviderProps) =>{
  const { pokemonTeam: pokemonTeamCookie } = parseCookies();
  const [pokemons, setPokemons] = useState<pokemonInterface[]>([]);
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
        setPokemons(cookieTeam);
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
           
      const allPokeIds = pokemons.map(pokemon => pokemon.id) 
      const hasAlready = allPokeIds.includes(pokemon.id);
      const newPokemon = {...pokemon};
      if(pokemons.length<6 && !hasAlready)
      setPokemons(pokemons => [...pokemons, newPokemon]); 
       
    }

    const handleSetShowPokemon = (pokemon: pokemonInterface) =>{
         setShowpokemon(pokemon);
    }
    
    const handleDeletePokeTeam = () => {
      destroyCookie(null, 'pokemonTeam')
      setPokemons([]);
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
        setPokemons(changeShiny);        
    }


    const values = { 
      pokemons, 
      handlePokemonTeam, 
      setShiny, 
      showpokemon, 
      handleSetShowPokemon, 
      handlerSearch,
      handleDeletePokeTeam,
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