import { Image, Button, Text } from '@chakra-ui/react';
import React from 'react' 

import { pokemonInterface } from '../../../contexts/PokemonTeamContext';
import { usePokemonTeam } from '../../../hooks/usePokemonTeamContext';

interface pokemonProps {
  pokemon?: pokemonInterface,
  index: number,
}

export const Addedpokemon = ({pokemon, index} : pokemonProps) => {
  
  const { setShiny, handleSetShowPokemon } = usePokemonTeam();

  const avatar = pokemon?.isShiny ? pokemon?.sprite[1] : pokemon?.sprite[0];
  
  return pokemon ? (
     
    <Button  h={'55px'} minW={"300px"} display={"flex"} justifyContent={"space-between"} px={6} onClick={()=>handleSetShowPokemon(pokemon)}>
     <Text textTransform={'capitalize'}> {pokemon.name} </Text>
     <Image src={avatar} alt={pokemon.name} onClick={()=> setShiny(!pokemon.isShiny, index)}></Image>
    </Button>
     
  ) : (<></>)
}
