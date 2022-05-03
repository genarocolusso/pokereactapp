import { Image, Button, Text, Icon,  HStack, color } from '@chakra-ui/react';
import React from 'react' 
import { FaTrash } from 'react-icons/fa';
import { pokemonInterface } from '../../../contexts/PokemonTeamContext';
import { usePokemonTeam } from '../../../hooks/usePokemonTeamContext';

interface pokemonProps {
  pokemon?: pokemonInterface,
  index: number,
}

export const Addedpokemon = ({pokemon, index} : pokemonProps) => {
  
  const { setShiny, handleSetShowPokemon, handleRemovePokemon } = usePokemonTeam();

  const avatar = pokemon?.isShiny ? pokemon?.sprite[1] : pokemon?.sprite[0];
  
  return pokemon ? (
     
    <Button  h={'55px'} minW={"300px"} display={"flex"} justifyContent={"space-between"} px={6} onClick={()=>handleSetShowPokemon({...pokemon})}>
     <Text textTransform={'capitalize'}> {pokemon.name} </Text>
      <HStack>
        <Image src={avatar} alt={pokemon.name} onClick={(e)=>{e.stopPropagation(); setShiny(!pokemon.isShiny, index)}}></Image>
        <Icon as={FaTrash} color={'red.300'}
         onClick={(e)=>{e.stopPropagation(); handleRemovePokemon(pokemon.id)}}
         />
      </HStack>
       </Button>
     
  ) : (<></>)
}
