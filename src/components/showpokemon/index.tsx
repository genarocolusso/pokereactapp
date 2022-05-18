import { TypePokemon } from './typepokemon'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

import { usePokemonTeam } from '../../hooks/usePokemonTeamContext';
import { pokemonInterface } from '../../contexts/PokemonTeamContext';
import { Box, Button, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'; 
import { TypeEffect } from './typeEffects';


export function ShowPokemon() {
  
  const {handlePokemonTeam, showpokemon, handleSetShowPokemon} = usePokemonTeam() 
  const pokemon = showpokemon;
  const pokemonImage = pokemon.isShiny ? pokemon.sprite[1] : pokemon.sprite[0];
  
  const handleShiny = (shinyValue : boolean) =>{    
    handleSetShowPokemon({...pokemon, isShiny: shinyValue});
  }

  return (
    <Flex direction={"column"} width={"100%"} alignItems={"center"}>
      
      {pokemon.id && ( 
        <>
      <Heading textTransform={'capitalize'} fontWeight={"normal"} size={"xl"} color={"red.400"}>
      #{pokemon.id} {pokemon.name}  
      </Heading>
      <Box>
        <Flex gap={2}> 
        { pokemon.type.map((type, i)=>{
          return (
          <TypePokemon key={i} name={type.toUpperCase()}></TypePokemon>
          )
        })} 
        </Flex>
       </Box>


      <Image boxSize='208px' src={pokemonImage} alt={pokemon.name}/>      
       
        
      <Flex mt={4} gap={2}> 
        <Button    
          bg={"transparent"}
          color={"white"}
          border={"1px solid white"}
          _hover={{bg:"whiteAlpha.300"}}
          onClick={()=> handlePokemonTeam(pokemon)}
          >Add Pokémon</Button> 
        <Button   
        bg={"red.400"}
        _hover={{bg:"red.500"}}
        color={"white"} 
        onClick={()=> handleShiny(!pokemon.isShiny)}>
        <Icon as={pokemon.isShiny ?  FaStar  : FaStarHalfAlt} /> Shiny </Button> 
      </Flex>

        {/* <Box>
          <Text> Effectiveness</Text>
          {pokemon.typeurl.map((url,i)=>{
            if(url.length>0)
            return (
              <TypeEffect typename={pokemon.type[i]} typeurl={url} key={i}/>
            )
          })}
        </Box> */}
       
       </>
      
      )}

     
    </Flex>
  )
}
