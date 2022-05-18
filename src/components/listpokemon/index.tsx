import { Box, Button, Heading, Stack } from '@chakra-ui/react';
import React from 'react'
import { pokemonTeam } from '../../contexts/PokemonTeamContext';
import { usePokemonTeam } from '../../hooks/usePokemonTeamContext'; 
import { TeamsDrawer } from '../teamsdrawer';
import { Addedpokemon } from './addedpokemon';
 
 interface ListpokemonProps {pokemonTeam : pokemonTeam, teamView? : boolean}
 
export const Listpokemon = ({pokemonTeam,teamView}:ListpokemonProps) => {

  const {pokemonUserState, handleDeletePokeTeam, handleAddPokeTeam} = usePokemonTeam()
  const pokemons = pokemonTeam.data;
   
  return (
    <Box bg={"#222121"} maxW={347} borderRadius={12} p={6}>
       
    <Stack spacing={'4'}> 
      { pokemons?.length>0  ? 
      <>
      {!teamView ?
        <Heading fontWeight={"normal"} fontSize={"2xl"}> Team <Box as="span"  color={"red.400"}> builder</Box></Heading>
      : 
          <Heading fontWeight={"normal"} fontSize={"2xl"}> Team <Box as="span"  color={"red.400"}> #{pokemonTeam.teamNumber + 1} </Box></Heading>
        }
          {
        pokemons?.map((pokemon,i) => (
          <Addedpokemon key={pokemon.id+i} pokemon={pokemon} index={i} teamView={teamView}/>
        )) 
        }
        </>
        :
        ( 
          <Heading fontWeight={"normal"} fontSize={"lg"}> Add pokemons to your team</Heading>
        )
      } 
  

  {!teamView && (
<>
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
      </>
  )}
       
       
    </Stack>
    </Box>
  )
}
