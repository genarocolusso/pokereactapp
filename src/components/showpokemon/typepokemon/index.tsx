import {PokeTypes} from './typeconstants'
import { Box } from '@chakra-ui/react';

interface typeProps {
name: string;
typeEffect?: string; 
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  
export const TypePokemon = ({name, typeEffect }: typeProps) =>{
 
    const typeColor :string  =  PokeTypes[`${name}`]

    return (<>
        {!typeEffect &&  (<Box bg={'whiteAlpha.100'} border={`1px solid ${typeColor}`} borderRadius={'6'} color={"whiteAlpha.900"} textAlign="center" px={4} >
        {capitalizeFirstLetter(name.toLowerCase())}  {typeEffect && `X${typeEffect}`}
    </Box> )}
        
    {typeEffect &&  (<Box bg={typeColor} border={`1px solid ${typeColor}`} borderRadius={'6'} color={'white'} textAlign="center" px={4} >
        {capitalizeFirstLetter(name.toLowerCase())}  {typeEffect && `X${typeEffect}`}
    </Box> )}
        </>
    ) 
}