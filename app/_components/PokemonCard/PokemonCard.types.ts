import { ElementType } from "react";

export type PokemonCardProps = {
  url: string;
};

export type TypographyProps = {
  component?: ElementType;
};

// Only declaring the properties we need
type Sprites = {
  front_default: string;
};

export type PokemonResponse = {
  id: number;
  name: string;
  sprites: Sprites;
};
