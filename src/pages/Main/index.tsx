import { Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Listpokemon } from '../../components/listpokemon'
import { Searchpokemon } from '../../components/searchpokemon'


export const MainContainer: React.FC = () => {
  return (
    <Flex w="100%" my="6" maxWidth={1180} mx="auto" px="6">
       <Grid w={"100%"}  px={[4,8]}  templateColumns={{base: "repeat(1, 1fr)",md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)"}} gap={4}>
    <GridItem colStart={1} colEnd={[1,1,2,3]}    >  
    <Searchpokemon/>
    </GridItem> 
    <GridItem colStart={[1,1,2,3]} >  
    <Listpokemon/>
    </GridItem> 
      </Grid>  
    </Flex>
  )
}
