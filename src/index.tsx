import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  
import { PokemonTeamContextProvider } from './contexts/PokemonTeamContext';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
     <QueryClientProvider client={queryClient}>
     <PokemonTeamContextProvider> 
    <App/>
     </PokemonTeamContextProvider>
     </QueryClientProvider>
     </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

 