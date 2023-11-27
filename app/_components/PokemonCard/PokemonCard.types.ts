import { ElementType } from "react";

export type PokemonCardProps = {
  name: string;
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
  sprites: Sprites;
};
