import React, { useState } from 'react'
import * as S from './styles'
import { TypePokemon } from './Type'

import defaultImg from '../../assets/imgdefault.png';
 
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Button } from '../button';
import { usePokemonTeam } from '../../hooks/usePokemonTeamContext';
import { pokemonInterface } from '../../contexts/PokemonTeamContext';

 
interface showPokemonProps {
  pokemonData: pokemonInterface,

}

export function ShowPokemon({pokemonData}: showPokemonProps) {
  
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

      {/* <S.PokemonTypeContainer>
        <S.Title>Type Effectiveness</S.Title>
        <S.TypeRow> 
        <TypePokemon name="FIGHTING" typeEffect="2" ></TypePokemon>
        <TypePokemon name="GHOST" typeEffect="0"></TypePokemon>
        </S.TypeRow>
      </S.PokemonTypeContainer> */}
      </div>
      
      )}

      <S.TypeRow> 
      <Button 
      text={`Add Pokémon`} 
      bgColor="black"
      handleClick={()=> handlePokemonTeam(pokemon)}
      />
     <Button 
     text={`Shiny`} 
     bgColor="#6FCF97" 
     icon={pokemon.isShiny ? <FaStar/> : <FaStarHalfAlt/>}  
     handleClick={()=> handleShiny(!pokemon.isShiny)}/>
     </S.TypeRow>
    </S.Container>
  )
}
