import styled from "styled-components";
 

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    height: 100%;
     
`;

export const PokemonName = styled.div`
    color: #000;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 16px;
    text-transform: capitalize;
`;
 
export const Title = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #1D1C1C;
margin-bottom: 8px;
`; 

export const PokemonTypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 16px;
    margin-top: 16px;
`;

 
 export const PokemonPicture = styled.div`
    width: auto;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-width: 100%;
        height: 255px;

    }
 `

 export const TypeRow = styled.div`
 
    display: flex;
    flex-direction: row;

     div, button {
         margin-right: 16px;
     }
  
 `

 
 