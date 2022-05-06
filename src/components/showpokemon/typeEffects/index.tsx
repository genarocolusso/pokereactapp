import { Box, HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useTypes } from "../../../services/hooks/useTypes";
import { TypePokemon } from "../typepokemon";

interface typeProps {
typeurl: string
typename: string
}

export const TypeEffect = ({typeurl, typename}: typeProps) =>{
 
    const { data, isLoading } = useTypes(typeurl);

    const double_damage_to = data ? data.damage_relations.double_damage_to : [];
    const double_damage_from = data ? data.damage_relations.double_damage_from : [];
    const zero_damage_from = data ? data.damage_relations.no_damage_from : [];
    const zero_damage_to = data ? data.damage_relations.no_damage_to : [];
    const half_damage_from = data ? data.damage_relations.half_damage_from : [];
    const half_damage_to = data ? data.damage_relations.half_damage_to : [];
  return (
      <>
        {isLoading && (<Spinner color='red.500' />)}
        {data && double_damage_to && (
            <Box mt={2}>
            <Text><b>{typename}</b> does double damage against</Text>
            <SimpleGrid columns={[2,2,2,4]} spacing={1}>
            {double_damage_to.map(types => 
                <TypePokemon key={types.name} typeEffect="2" name={types.name.toUpperCase()}/>
                )
            }
            </SimpleGrid>
            </Box>
                )}

      </>
  )
   
}