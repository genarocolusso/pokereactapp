import styled from "styled-components"; 

interface typeProps {
    typeColor: string;
    }
 

export const Container = styled.div<typeProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    color: #FFFFFF;
    background-color: ${(props)=> props.typeColor};
    width: 120px;
    text-align: center;
    text-transform: capitalize;
    padding: 8px 16px;
    border-radius: 32px;
`

 