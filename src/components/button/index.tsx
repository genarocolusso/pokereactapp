import * as S from './styles';


interface buttonProps {
    icon?: JSX.Element,
    text: string,
    bgColor: string,
    handleClick?: () => void;
}

export const Button: React.FC<buttonProps> = ({icon, text, bgColor, handleClick}) =>{


    return (
        <S.Container bgColor={bgColor} onClick={handleClick}>
            {icon && icon}
            {text && text} 
        </S.Container>
    )
}