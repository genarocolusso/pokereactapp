import { pokemonUserStateType, pokemonTeam } from './../PokemonTeamContext';

export const pokemon_actions = { 
    ADD_POKEMON: "ADD_POKEMON",
    REMOVE_POKEMON: "REMOVE_POKEMON",
    DELETE_TEAM: "DELETE_TEAM",
    SET_CURRENT_SHINY: " SET_CURRENT_SHINY",
    LOAD_TEAM: "LOAD_TEAM",
    SAVE_TEAM: "SAVE_TEAM",
    LOAD_MY_TEAMS: "LOAD_MY_TEAMS"
  };

  export const initialState: pokemonUserStateType = {
    pokemonTeams: [],
    currentTeam: {data:[], teamNumber: 0}
  }
  
export const reducer = (state : pokemonUserStateType, action) => {
        console.log(action.type, state)
    switch (action.type){
        case pokemon_actions.ADD_POKEMON:
                 return  {...state, currentTeam: {...state.currentTeam, data: [...state.currentTeam.data, action.newPokemon]} } 
        case pokemon_actions.REMOVE_POKEMON:
            return  {...state, currentTeam:  {...state.currentTeam,data: [...state.currentTeam.data.filter(pokemon => pokemon.id!==action.id)] }}
        case pokemon_actions.LOAD_TEAM: 
                 return {...state, currentTeam: {...state.currentTeam, data: [...action.payload.Team], teamNumber: action.payload.Number} } 
        case pokemon_actions.SET_CURRENT_SHINY: 
                 return {...state, currentTeam: {...state.currentTeam,data: [...state.currentTeam.data.map( poke => {
                   if(poke.id == action.Team.id)
                   return {...poke, isShiny: action.Team.isShiny}
                   else
                   return poke
                })]} } 
        case pokemon_actions.DELETE_TEAM:
                return   {...state, currentTeam:{data: [], teamNumber: 0}, pokemonTeams: [...state.pokemonTeams.filter((team,idx)=> idx !== action.index)].map( (team, idx)=>  { return {...team ,  teamNumber : idx}}) }
        case pokemon_actions.SAVE_TEAM:
                return {...state, currentTeam: {...state.currentTeam, teamNumber: state.pokemonTeams.length},pokemonTeams: [...state.pokemonTeams, {...action.pokemonsTeam}]}
        case pokemon_actions.LOAD_MY_TEAMS:
                return {...state,pokemonTeams: action.pokemonTeams}
        default:
                return state;
  }
}

 