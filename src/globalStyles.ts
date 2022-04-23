import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    padding: 0;
    background: #E1FAE1;
    font-family: Open-Sans,Helvetica,Sans-Serif;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    width: 100%;
  }

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
`;


 
export default GlobalStyle;