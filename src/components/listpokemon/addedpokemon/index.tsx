import {
  Image,
  Button,
  Text,
  Icon,
  HStack,
  color,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { pokemonInterface } from "../../../contexts/PokemonTeamContext";
import { usePokemonTeam } from "../../../hooks/usePokemonTeamContext";

interface pokemonProps {
  pokemon?: pokemonInterface;
  index: number;
  teamView?: boolean;
}

export const Addedpokemon = ({ pokemon, index, teamView }: pokemonProps) => {
  const { setShiny, handleSetShowPokemon, handleRemovePokemon } =
    usePokemonTeam();
  const avatar = pokemon?.isShiny ? pokemon?.sprite[1] : pokemon?.sprite[0];

  if (pokemon && !teamView)
    return (
      <Button
        bg={"#313030"}
        _active={{ bg: "#242424" }}
        _hover={{ bg: "#242424" }}
        h={"55px"}
        minW={"300px"}
        display={"flex"}
        justifyContent={"space-between"}
        px={6}
        onClick={() => handleSetShowPokemon({ ...pokemon })}
      >
        <Text fontWeight={"normal"} textTransform={"capitalize"}>
          {" "}
          {pokemon.name}{" "}
        </Text>
        <HStack>
          <Image
            src={avatar}
            alt={pokemon.name}
            onClick={(e) => {
              e.stopPropagation();
              setShiny(!pokemon.isShiny, pokemon.id);
            }}
          ></Image>
          <Icon
            as={FaTrash}
            color={"red.300"}
            onClick={(e) => {
              e.stopPropagation();
              handleRemovePokemon(pokemon.id);
            }}
          />
        </HStack>
      </Button>
    );

  return pokemon && teamView ? (
    <Box
      bg={"#313030"}
      h={"55px"}
      minW={"300px"}
      display={"flex"}
      justifyContent={"space-between"}
      px={6}
      borderRadius={6}
      alignItems={"center"}
    >
      <Text fontSize={16} textTransform={"capitalize"}>
        {" "}
        {pokemon.name}{" "}
      </Text>
      <HStack>
        <Image src={avatar} alt={pokemon.name}></Image>
      </HStack>
    </Box>
  ) : null;
};
