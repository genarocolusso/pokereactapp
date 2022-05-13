import { Button, Stack } from '@chakra-ui/react';
import React from 'react'
import { usePokemonTeam } from '../../hooks/usePokemonTeamContext'; 
import { TeamsDrawer } from '../teamsdrawer';
import { Addedpokemon } from './addedpokemon';
 
export const Listpokemon = () => {

  const {pokemonUserState, handleDeletePokeTeam, handleAddPokeTeam} = usePokemonTeam()
  const pokemons = [...pokemonUserState.currentTeam.data]
  return (
    <Stack spacing={'4'}> 
      { pokemons?.length>0  ? 
        pokemons?.map((pokemon,i) => (
          <Addedpokemon key={pokemon.id+i} pokemon={pokemon} index={i}/>
        )) 
        :
        ( 
          <h3> Add pokemons to your team, PLEASE</h3>
        )
      } 
      <Button bg='#9b55dd' 
       _hover={{ bg: "#894ac4" }} 
       color={"white"} 
       onClick={()=>handleAddPokeTeam({data: pokemons, teamNumber: pokemonUserState.pokemonTeams.length})}>
      Save Team
      </Button>
      <TeamsDrawer pokemonTeams={pokemonUserState.pokemonTeams}/>
      <Button bg='#f05' 
       _hover={{ bg: "#e60550" }}
      color={"white"} onClick={()=>handleDeletePokeTeam(pokemonUserState.currentTeam.teamNumber)}>
      Delete Team
      </Button>
       
    </Stack>
  )
}
