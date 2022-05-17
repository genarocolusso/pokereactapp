
import { MainContainer } from './pages/Main'; 
import GlobalStyle from './globalStyles'; 
import { Box, Flex } from '@chakra-ui/react';
import { PokeLogo } from './components/pokelogo';
import { SideMenu } from './components/menu';

function App() {
  return (
    
    <div className="App">  
        <GlobalStyle/>
        <Box  px="6"  my="6" maxWidth={1480} mx="auto" bg={"#1D1C1C"} >
    <Flex direction={"column"}>
    <PokeLogo/> 
    <Flex> 
      <SideMenu/>
       <MainContainer/> 
       </Flex>
       </Flex>
       </Box>
    </div>
     
  );
}

export default App;
