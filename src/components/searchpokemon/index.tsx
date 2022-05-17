import React, { useCallback, useState } from 'react'
import { debounce } from "lodash";
import { ShowPokemon } from '../showpokemon'

import { FaSearch } from 'react-icons/fa';
  
import { usePokemonTeam } from '../../hooks/usePokemonTeamContext';
import { Box, Flex, Input, Icon, Text } from '@chakra-ui/react';

export const Searchpokemon: React.FC = () => {
  
  const { handlerSearch } = usePokemonTeam()
 
const handler = useCallback(debounce((id : string) => 
{
  if(id.length>0)
  handlerSearch(id.toLowerCase().trim())
}, 1000), []);


  return (
    <Flex flexDir={'column'} gap={6}>
        <ShowPokemon/>
    <Flex  flexDir={'column'} alignItems={"center"} >
      <Box w={"340px"}>
    <Text textAlign={"center"} color={"#959595"}>Search Pokemons and build your teams.</Text>
    <form  onSubmit={(e)=>{  e.preventDefault(); }}>
        <Box as={'label'}
        display={"flex"}
        flexDir={'row'}
        alignItems={'center'}
        bg={"#3B3A3A"}
        py={2}
        px={6}
        borderRadius={'full'}
        > 
             
            <Input
            variant='unstyled'
            size='md'
            type="text"
            name="Name"
            placeholder='Enter pokemon name or number'
            onChange={(e) => handler(e.target.value)}
            color={"red.400"}
            />
            <Icon  as={FaSearch} fontSize={14}/>
             
        </Box>
    </form>
    </Box>
    </Flex>
      
    </Flex>
  )
}
