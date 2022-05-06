import * as S from './styles'
import { TypePokemon } from './type'
 
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
 
import { usePokemonTeam } from '../../hooks/usePokemonTeamContext';
import { pokemonInterface } from '../../contexts/PokemonTeamContext';
import { Button, Icon } from '@chakra-ui/react'; 
import { TypeEffect } from './typeEffects';


export function ShowPokemon() {
  
  const {handlePokemonTeam, showpokemon, handleSetShowPokemon} = usePokemonTeam() 
  const pokemon = showpokemon;
  const isShiny = pokemon.isShiny ? pokemon.sprite[1] : pokemon.sprite[0];
  
  const handleShiny = (shinyValue : boolean) =>{    
    handleSetShowPokemon({...pokemon, isShiny: shinyValue});
  }

  return (
    <S.Container>
      
      {pokemon && (<div>
      <S.PokemonPicture>
        <img src={isShiny} />
      </S.PokemonPicture>
      <S.PokemonName>
        {pokemon.name} #{pokemon.id}
      </S.PokemonName>

      <S.PokemonTypeContainer>
        <S.Title>Type</S.Title>
        <S.TypeRow> 
        { pokemon.type.map((type, i)=>{
          return (
          <TypePokemon key={i} name={type.toUpperCase()}></TypePokemon>
          )
        })} 
        </S.TypeRow>
       </S.PokemonTypeContainer>
        
       <S.TypeRow> 
      <Button   
      colorScheme='green' 
      onClick={()=> handlePokemonTeam(pokemon)}
       >Add Pokémon</Button> 
     <Button  
     colorScheme='teal'  
     onClick={()=> handleShiny(!pokemon.isShiny)}>
     <Icon  as={pokemon.isShiny ?  FaStar  : FaStarHalfAlt} /> Shiny </Button> 
     </S.TypeRow>

        <S.PokemonTypeContainer>
          <S.Title> Effectiveness</S.Title>
          {pokemon.typeurl.map((url,i)=>{
            if(url.length>0)
            return (
              <TypeEffect typename={pokemon.type[i]} typeurl={url} key={i}/>
            )
          })}
        </S.PokemonTypeContainer>
       
      </div>
      
      )}

     
    </S.Container>
  )
}
