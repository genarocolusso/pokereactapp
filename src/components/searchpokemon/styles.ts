import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    
    input { 
       
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 21px 24px 21px 84px;
    font-size: 24px;
    width: 100%;
    height: 65px;
    color:#1D1C1C;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
        
    outline: none;
    border: none; 
    }
    
`;

export const SearchButton = styled(FaSearch)`

color: #000;
font-size:32px;
position: absolute;
top: 16px;
left: 24px;
`

