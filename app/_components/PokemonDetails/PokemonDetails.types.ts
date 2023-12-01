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
  name: string;
  id?: number;
  isLoading?: boolean;
};

export type PokemonDetailsImageProps = {
  name: string;
  image?: string;
  isLoading?: boolean;
};

export type PokemonDetailsContentProps = {
  children: ReactNode;
};

export type PokemonDetailsStatsProps = {
  children: ReactNode;
};

export type PokemonDetailsWeightProps = {
  weight?: number;
  isLoading?: boolean;
};

export type PokemonDetailsHeightProps = {
  height?: number;
  isLoading?: boolean;
};

export type PokemonDetailsAbilitiesProps = {
  abilities?: Ability[];
  isLoading?: boolean;
};
