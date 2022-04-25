import React, { useCallback, useState } from 'react'
import { debounce } from "lodash";
import { ShowPokemon } from '../showpokemon'

import { FaSearch } from 'react-icons/fa';
  
import { usePokemonTeam } from '../../hooks/usePokemonTeamContext';
import { Box, Flex, Input, Icon  } from '@chakra-ui/react';

export const Searchpokemon: React.FC = () => {
  
  const { handlerSearch, showpokemon } = usePokemonTeam()
 
const handler = useCallback(debounce((id : string) => 
{
  if(id.length>0)
  handlerSearch(id)
}, 1000), []);


  return (
    <Flex flexDir={'column'} pos={'relative'}>
    <form  onSubmit={(e)=>{  e.preventDefault(); }}>
        <Box as={'label'} display={"flex"} flexDir={'row'} alignItems={'center'}> 
            <Icon  as={FaSearch} fontSize={16} mr={4}/>
            <Input   variant='unstyled'   size='md' type="text" name="Name" placeholder='Enter pokemon ID number'  onChange={(e) => handler(e.target.value)}  />
             
        </Box>
    </form>
    { showpokemon &&  (<ShowPokemon pokemonData={showpokemon} />)}
      
    </Flex>
  )
}
