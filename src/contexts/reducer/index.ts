import { pokemonInterface } from './../PokemonTeamContext';

export const pokemon_actions = { 
    ADD_POKEMON: "ADD_POKEMON",
    REMOVE_POKEMON: "REMOVE_POKEMON",
    DELETE_TEAM: "DELETE_TEAM",
    LOAD_TEAM: "LOAD_TEAM",
  };

  export const initialState: pokemonInterface[] = []

export const reducer = (state, action) => {
    
    switch (action.type){
        case pokemon_actions.ADD_POKEMON:
                 return  [...state, action.newPokemon]   
        case pokemon_actions.REMOVE_POKEMON:
            return [...state.filter(pokemon => pokemon.id!=action.id)]
        case pokemon_actions.LOAD_TEAM: 
                 return   action.Team 
        case pokemon_actions.DELETE_TEAM:
                return   []  
        default:
                return state;
  }
}