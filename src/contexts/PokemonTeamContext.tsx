import { debounce } from "lodash";
import React, { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { usePokemon } from "../services/hooks/usePokemon";
import { QueryEffects } from "../types/queryTypes";
export interface pokemonInterface {
    id: string,
    name: string,
    type: string[],
    sprite: string[], 
    isShiny: boolean,
  }

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
  } & QueryEffects;
 
  interface ProviderProps {
    children: ReactNode;
  }

 
//omit remove
//pick adds
  
export const PokemonTeamContext = createContext({} as pokemonContextData)


export const PokemonTeamContextProvider = (props : ProviderProps) =>{
  const [pokemons, setPokemons] = useState<pokemonInterface[]>([]);
  const [showpokemon, setShowpokemon] = useState<pokemonInterface>(DEFAULT_VALUE);
  const [pokemonSearch, setPokemonSearch ] = useState<number>(1);

  const { data, isLoading, isFetching, error } = usePokemon(pokemonSearch);


  useEffect(() => {
    if(data)
    setShowpokemon(data?.pokemon);
  }, [data]);


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