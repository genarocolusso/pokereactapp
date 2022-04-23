import React from 'react'
import { Listpokemon } from '../../components/listpokemon'
import { Searchpokemon } from '../../components/searchpokemon'
import * as S from './styles'

export const MainContainer: React.FC = () => {
  return (
    <S.AppContainer>
       <S.Grid>
    <Searchpokemon/>
    <Listpokemon/>
      </S.Grid>  
    </S.AppContainer>
  )
}
