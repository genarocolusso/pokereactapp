import { Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { Listpokemon } from "../../components/listpokemon";
import { usePokemonTeam } from "../../hooks/usePokemonTeamContext";

export const Teams: React.FC = () => {
  const { pokemonUserState } = usePokemonTeam();
  const pokemonTeams = pokemonUserState.pokemonTeams;

  return (
    <Flex w={"100%"} justifyContent={"center"}>
      <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing={4}>
        {pokemonTeams.length > 0 &&
          pokemonTeams.map((pokeTeam, idx) => (
            <Listpokemon pokemonTeam={pokeTeam} key={idx} teamView={true} />
          ))}
      </SimpleGrid>
    </Flex>
  );
};
