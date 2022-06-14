import {
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { pokemonTeam } from "../../contexts/PokemonTeamContext";

import { PokemonTeamCard } from "../pokemonteamcard";
type teamsProps = {
  pokemonTeams: pokemonTeam[];
};
export const TeamsDrawer = ({ pokemonTeams }: teamsProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        My Teams
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#212121"}>
          <DrawerCloseButton />
          <DrawerHeader>Select a Team</DrawerHeader>

          <DrawerBody>
            <Box mt={6}>
              {pokemonTeams.length > 0 &&
                pokemonTeams.map((team, idx) => (
                  <Flex flexDirection={"column"} key={idx + "flexpoke"}>
                    <Text>Team {idx + 1}</Text>
                    <PokemonTeamCard {...team} />
                  </Flex>
                ))}
            </Box>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
