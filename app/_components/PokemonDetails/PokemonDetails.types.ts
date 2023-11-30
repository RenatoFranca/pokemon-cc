import { ReactNode } from "react";

export type PokemonDetailsProps = {
  name: string;
};

type Sprite = {
  front_default?: string;
};

type Type = {
  type: {
    name: string;
  };
  slot: number;
};

type Ability = {
  ability: {
    name: string;
  };
  slot: number;
};

export type PokemonDetailsResponse = {
  id: number;
  name: string;
  sprites: Sprite;
  types?: Type[];
  weight: number;
  height: number;
  abilities: Ability[];
};

export type PokemonDetailsHeaderProps = {
  id?: number;
  name: string;
};

export type PokemonDetailsImageProps = {
  image?: string;
  name: string;
};

export type PokemonDetailsContentProps = {
  children: ReactNode;
};

export type PokemonDetailsStatsProps = {
  children: ReactNode;
};

export type PokemonDetailsWeightProps = {
  weight?: number;
};

export type PokemonDetailsHeightProps = {
  height?: number;
};

export type PokemonDetailsAbilitiesProps = {
  abilities?: Ability[];
};
