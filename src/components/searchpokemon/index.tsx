import React, { useCallback, useState } from 'react'
import { debounce } from "lodash";
import { ShowPokemon } from '../showpokemon'

import * as S from './styles';
import { usePokemonTeam } from '../../hooks/usePokemonTeamContext';

export const Searchpokemon: React.FC = () => {
  
  const { handlerSearch, showpokemon } = usePokemonTeam()
 
const handler = useCallback(debounce((id : string) => 
{
  if(id.length>0)
  handlerSearch(id)
}, 1000), []);


  return (
    <S.Container>
    <form  onSubmit={(e)=>{  e.preventDefault(); }}>
        <label> 
            <input type="text" name="Name" placeholder='Enter pokemon ID number'  onChange={(e) => handler(e.target.value)}  />
            <S.SearchButton />
        </label>
    </form>
    { showpokemon &&  (<ShowPokemon pokemonData={showpokemon} />)}
      
    </S.Container>
  )
}
