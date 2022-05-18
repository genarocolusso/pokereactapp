

import GlobalStyle from '../../globalStyles'; 
import { Box, Flex } from '@chakra-ui/react';
import { PokeLogo } from '../../components/pokelogo';
import { SideMenu } from '../../components/menu'; 
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    
   <> 
        <GlobalStyle/>
        <Box  px="6"  my="6" maxWidth={1480} mx="auto" bg={"#1D1C1C"} >
    <Flex direction={"column"}>
    <PokeLogo/> 
    <Flex> 
      <SideMenu/>
       
      <Outlet />
     
       </Flex>
       </Flex>
       </Box>
  </>
     
  );
}

export default Layout;
