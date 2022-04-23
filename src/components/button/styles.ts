import styled from "styled-components";

interface buttonStyleProps { 
    bgColor: string,
}

 export const Container = styled.button<buttonStyleProps>`
 
 outline: 0;
 border: 0;
 box-shadow: none;
 background: ${(props)=> props.bgColor};
 color: white;
 text-align: center;
 padding: 8px 16px;
 border-radius: 4px;
 text-transform: capitalize;
 max-width: 130px;

 svg {
     
    margin-right: 8px;
    color: #ffec68;
 }
 `