import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  
import { PokemonTeamContextProvider } from './contexts/PokemonTeamContext';

ReactDOM.render(
  <React.StrictMode>
     <PokemonTeamContextProvider> 
    <App/>
     </PokemonTeamContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

 