import { pokemonInterface } from './../../contexts/PokemonTeamContext';
import { useQuery } from "react-query";
import { api } from "../api";

 
type GetPokemonResponse = {
  totalCount: number,
  pokemon: pokemonInterface
}

export async function getPokemon(id: string): Promise<GetPokemonResponse> {

  const { data, headers } = await api.get(`pokemon/${id}`);

  const totalCount = Number(headers['x-total-count'])
     
  const pokemon ={
        id: data.id,
        name: data.name,
        type: data.types.map((x) => x.type.name),
        typeurl: data.types.map((x) => x.type.url.split('v2/')[1]),
        sprite: [data.sprites.front_default, data.sprites.front_shiny],
        isShiny: false,
    }

  return { pokemon, totalCount };

}

export function usePokemon(id: string) {
  return useQuery(['pokemon', id], () => getPokemon(id), {
    staleTime: 1000 * 600  // 10min
  })
}