import { ElementType } from "react";

export type PokemonCardProps = {
  name: string;
  url: string;
};

export type TypographyProps = {
  component?: ElementType;
};

type Sprites = {
  front_default: string;
};

export type PokemonResponse = {
  sprites: Sprites;
};
