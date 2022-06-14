import { Avatar, AvatarGroup, theme } from "@chakra-ui/react";
import { pokemonTeam } from "../../contexts/PokemonTeamContext";
import { usePokemonTeam } from "../../hooks/usePokemonTeamContext";

export const PokemonTeamCard = (pokemonTeam: pokemonTeam) => {
  const { handleLoadTeam } = usePokemonTeam();

  return (
    <>
      <AvatarGroup
        size="md"
        max={6}
        onClick={() => handleLoadTeam(pokemonTeam)}
      >
        {pokemonTeam.data.map((pokemon) => {
          const avatar = pokemon?.isShiny
            ? pokemon?.sprite[1]
            : pokemon?.sprite[0];

          return (
            <Avatar
              bg={"gray.700"}
              border={`1px solid ${theme.colors.gray[600]}`}
              key={pokemon.name + "p" + pokemon.id}
              name={pokemon.name}
              src={avatar}
            />
          );
        })}
      </AvatarGroup>
    </>
  );
};
