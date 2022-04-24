import { pokemonInterface } from './../../contexts/PokemonTeamContext';
import { useQuery } from "react-query";
import { api } from "../api";

 
type GetPokemonResponse = {
  totalCount: number,
  pokemon: pokemonInterface
}

export async function getPokemon(id: number): Promise<GetPokemonResponse> {

  const { data, headers } = await api.get(`pokemon/${id}`);

  const totalCount = Number(headers['x-total-count'])
     
  const pokemon ={
        id: data.id,
        name: data.name,
        type: data.types.map((x:any) => x.type.name),
        sprite: [data.sprites.front_default, data.sprites.front_shiny],
        isShiny: false,
    }

  return { pokemon, totalCount };

}

export function usePokemon(id: number) {
  return useQuery(['pokemon', id], () => getPokemon(id), {
    staleTime: 1000 * 600  // 10min
  })
}