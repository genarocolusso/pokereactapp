import React, { createContext, ReactNode, useEffect, useState, useReducer } from "react";
import { usePokemon } from "../services/hooks/usePokemon";
import { QueryEffects } from "../types/queryTypes";
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { initialState, pokemon_actions, reducer } from "./reducer";


export interface pokemonInterface {
    id: string,
    name: string,
    type: string[],
    typeurl: string[],
    sprite: string[], 
    isShiny: boolean,
  }
  const MAX_AGE = 30 * 24 * 60 * 60;
  const DEFAULT_VALUE = {
    id: "",
    name: "",
    type: [""],
    typeurl:[""],
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
  const [showpokemon, setShowpokemon] = useState<pokemonInterface>(DEFAULT_VALUE);
  const [pokemonSearch, setPokemonSearch ] = useState<number>(1);
   const { data, isLoading, isFetching, error } = usePokemon(pokemonSearch);

   // changes pokemon shown
  useEffect(() => {
    if(data){      
    setShowpokemon(data?.pokemon);
   }
  }, [data]);

  //get pokemon team Cookies
  useEffect(() => {
    if (pokemonTeamCookie) {
      const cookieTeam : pokemonInterface[] =
        JSON.parse(pokemonTeamCookie);
        dispatch({ type: pokemon_actions.LOAD_TEAM, Team:cookieTeam });
    }  
  }, []) 
 
  //save on cookies pokemon changes
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


  // Add pokemon to team
    const handlePokemonTeam =(pokemon : pokemonInterface) => {  
    
      const allPokeIds = pokemons.map(pokemon => pokemon.id) 
      const hasAlready = allPokeIds.includes(pokemon.id);
      const newPokemon = {...pokemon};
      if(pokemons.length<6 && !hasAlready){   
      dispatch({ type: pokemon_actions.ADD_POKEMON, newPokemon });
      }
     
    }

    //set shown pokemon
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
    
    //search pokemon id
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


/*

The code is big but it manages the pokemonShown and pokemonTeam state for the application
I'm using useReducer to manage state and actions and it can be changed to add new functionalities
such as new teams and easily add, delete and update them. 

Using context It's way better than props drilling. this way you can access states and functions in any component without passing callbacks over components props.

*/