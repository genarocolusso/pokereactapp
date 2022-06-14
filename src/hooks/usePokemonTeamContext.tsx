import { useContext } from "react";
import { PokemonTeamContext } from "../contexts/PokemonTeamContext";

export function usePokemonTeam() {
  return useContext(PokemonTeamContext);
}
