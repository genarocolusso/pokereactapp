import { destroyCookie } from 'nookies';
import React from 'react'
import { usePokemonTeam } from '../../hooks/usePokemonTeamContext';
import { Button } from '../button';
import { Addedpokemon } from './addedpokemon';

import * as S from './styles';

export const Listpokemon = () => {

  const {pokemons, handleDeletePokeTeam} = usePokemonTeam()
 
  return (
    <S.Container>

      { pokemons.length>0  ? 
        pokemons.map((pokemon,i) => (
          <Addedpokemon key={pokemon.id+i} pokemon={pokemon} index={i}/>
        ))

        :
        ( 
          <h3> Add pokemons to your team, PLEASE</h3>
        )
      }
     
      <Button bgColor='#f05' text='Delete Team' handleClick={handleDeletePokeTeam}/>
    </S.Container>
  )
}
