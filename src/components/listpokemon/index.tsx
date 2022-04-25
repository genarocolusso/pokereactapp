import { Button, Stack } from '@chakra-ui/react';
import { destroyCookie } from 'nookies';
import React from 'react'
import { usePokemonTeam } from '../../hooks/usePokemonTeamContext'; 
import { Addedpokemon } from './addedpokemon';
 
export const Listpokemon = () => {

  const {pokemons, handleDeletePokeTeam} = usePokemonTeam()
 
  return (
    <Stack spacing={'4'}> 
      { pokemons.length>0  ? 
        pokemons.map((pokemon,i) => (
          <Addedpokemon key={pokemon.id+i} pokemon={pokemon} index={i}/>
        )) 
        :
        ( 
          <h3> Add pokemons to your team, PLEASE</h3>
        )
      } 
      <Button bg='#f05' color={"white"} onClick={handleDeletePokeTeam}>
      Delete Team
      </Button>
    </Stack>
  )
}
