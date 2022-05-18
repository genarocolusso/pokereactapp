import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
   
  }

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
 *:focus{
   outline: none;
   box-shadow: none;
 }
`;


 
export default GlobalStyle;