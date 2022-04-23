import React from 'react'
import * as S from './styles';
import defaultImg from '../../../assets/imgdefault.png';
import { pokemonInterface } from '../../../contexts/PokemonTeamContext';
import { usePokemonTeam } from '../../../hooks/usePokemonTeamContext';

interface pokemonProps {
  pokemon?: pokemonInterface,
  index: number,
}

export const Addedpokemon = ({pokemon, index} : pokemonProps) => {
  
  const { setShiny } = usePokemonTeam();

  const avatar = pokemon?.isShiny ? pokemon?.sprite[1] : pokemon?.sprite[0];
  
  return pokemon ? (
    <S.Container>
     <S.Text> {pokemon.name} </S.Text>
     <S.Floatimage src={avatar} alt='' onClick={()=> setShiny(!pokemon.isShiny, index)}></S.Floatimage>
    </S.Container>
  ) : (<></>)
}
