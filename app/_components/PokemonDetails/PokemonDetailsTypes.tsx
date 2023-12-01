import PokemonTypes from "../PokemonTypes";

export interface PokemonDetailsTypes {
  types?: { type: { name: string }; slot: number }[];
  isLoading?: boolean;
}

export const PokemonDetailsTypes = ({
  types,
  isLoading,
}: PokemonDetailsTypes) => {
  return <PokemonTypes types={types} isLoading={isLoading} />;
};
