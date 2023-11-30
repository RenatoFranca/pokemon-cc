import PokemonTypes from "../PokemonTypes";

export interface PokemonDetailsTypes {
  types?: { type: { name: string }; slot: number }[];
}

export const PokemonDetailsTypes = ({ types }: PokemonDetailsTypes) => {
  return <>{types && <PokemonTypes types={types} />}</>;
};
