import React, { createContext, ReactNode, useState } from "react";

export interface pokemonInterface {
    id: string,
    name: string,
    type: string[],
    sprite: string[], 
    isShiny: boolean,
  }

  export interface pokemonContextData {
    pokemons: pokemonInterface[],
    handlePokemonTeam: (pokemon : pokemonInterface) => void,
    setShiny: (shiny: boolean, index: number) => void,
  }
 
  interface ProviderProps {
    children: ReactNode;
  }

 
//omit remove
//pick adds
  
export const PokemonTeamContext = createContext({} as pokemonContextData)


export const PokemonTeamContextProvider = (props : ProviderProps) =>{
    const [pokemons, setPokemons] = useState<pokemonInterface[]>([])


    const handlePokemonTeam =(pokemon : pokemonInterface) => { 

            const allPokeIds = pokemons.map(pokemon => pokemon.id) 
            const hasAlready = allPokeIds.includes(pokemon.id);

            if(pokemons.length<6 && !hasAlready)
            setPokemons(pokemons => [...pokemons, pokemon]);
       
    }
    
    const setShiny = (shiny: boolean, index: number) => { 
        const newPokemons = pokemons.map( (pokemon,i)=> { 
            if(i === index){
            pokemon.isShiny = shiny;
             }
            return pokemon;
        }) 
        setPokemons(newPokemons);        
    }

    return (
        <PokemonTeamContext.Provider value={{pokemons, handlePokemonTeam, setShiny}}>
            {props.children}
        </PokemonTeamContext.Provider>
    )
}