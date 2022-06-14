import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PokemonTeamContextProvider } from "./contexts/PokemonTeamContext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider resetCSS theme={theme}>
        <QueryClientProvider client={queryClient}>
          <PokemonTeamContextProvider>
            <SidebarDrawerProvider>
              <App />
            </SidebarDrawerProvider>
          </PokemonTeamContextProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
