import React, { useCallback, useState } from 'react'
import { debounce } from "lodash";
import { usePokemon } from '../../services/hooks/usePokemon';
import { ShowPokemon } from '../showpokemon'

import * as S from './styles';

export const Searchpokemon: React.FC = () => {
    const [pokemon, setPokemon ] = useState<number>(1);
  const { data, isLoading, isFetching, error } = usePokemon(pokemon)

  console.log(data);

  
const handler = useCallback(debounce((id : string) => 
{
  if(id.length>0)
  setPokemon(parseInt(id))
}, 1000), []);


  return (
    <S.Container>
    <form  onSubmit={(e)=>{  e.preventDefault(); }}>
        <label> 
            <input type="text" name="Name" placeholder='Enter pokemon ID number'  onChange={(e) => handler(e.target.value)}  />
            <S.SearchButton />
        </label>
    </form>
    { data &&  (<ShowPokemon pokemonData={data.pokemon} />)}
      
    </S.Container>
  )
}
