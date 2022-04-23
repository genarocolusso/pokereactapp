import * as S from './styles'
import {PokeTypes} from './constants'

interface typeProps {
name: string;
typeEffect?: string;
}

export const TypePokemon = ({name, typeEffect}: typeProps) =>{
 
    const typeColor :string  =  PokeTypes[`${name}`]

    return (
        <S.Container typeColor={typeColor} >
            {name.toLowerCase()}  {typeEffect && `X${typeEffect}`}
        </S.Container>
    ) 
}