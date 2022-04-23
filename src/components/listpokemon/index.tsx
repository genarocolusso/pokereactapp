import React from 'react'
import { usePokemonTeam } from '../../hooks/usePokemonTeamContext';
import { Addedpokemon } from './addedpokemon';

import * as S from './styles';

export const Listpokemon = () => {

  const {pokemons} = usePokemonTeam()
  
  console.log(pokemons);
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
     
      
    </S.Container>
  )
}
