export type PokemonDetailsProps = {
  name: string;
};

export type PokemonDetailsResponse = {
  id: number;
  name: string;
  sprites: { front_default: string };
  types?: { type: { name: string }; slot: number }[];
  weight: number;
  height: number;
  abilities: { ability: { name: string }; slot: number }[];
};
