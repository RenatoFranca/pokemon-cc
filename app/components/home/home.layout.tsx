"use client";

import usePokemon from "@/app/hooks/usePokemon";
import { Main } from "./home.styles";
import { HomeLayoutProps } from "./home.types";

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const { pokemon, isError, isLoading } = usePokemon();

  console.log("pokemon", pokemon?.results);

  return <Main>{children}</Main>;
};

export default HomeLayout;
