import { useQuery } from "react-query";
import { api } from "../api";

export interface TypeDamageReponse {
    damage_relations: DamageRelations
  }
  
  export interface DamageRelations {
    double_damage_from: DoubleDamageFrom[]
    double_damage_to: DoubleDamageTo[]
    half_damage_from: HalfDamageFrom[]
    half_damage_to: HalfDamageTo[]
    no_damage_from: any[]
    no_damage_to: NoDamageTo[]
  }
  
  export interface DoubleDamageFrom {
    name: string
    url: string
  }
  
  export interface DoubleDamageTo {
    name: string
    url: string
  }
  
  export interface HalfDamageFrom {
    name: string
    url: string
  }
  
  export interface HalfDamageTo {
    name: string
    url: string
  }
  
  export interface NoDamageTo {
    name: string
    url: string
  }

  
export async function getType(typeurl: string): Promise<TypeDamageReponse> {
  const { data: typedata } = await api.get(`${typeurl}`);
  return { damage_relations: typedata.damage_relations };

}

export function useTypes(typeurl: string) {
  return useQuery(['types', typeurl], () => getType(typeurl), {
    staleTime: 10000 * 600  // 10min
  })
}