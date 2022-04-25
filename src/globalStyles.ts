import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    padding: 0;
    font-family: Open-Sans,Helvetica,Sans-Serif;
    align-items: center;
    justify-content: center; 
    width: 100%;
  }

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
`;


 
export default GlobalStyle;