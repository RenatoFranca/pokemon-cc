"use client";

import useSWR from "swr";
import fetcher from "../utils/fetcher";

type Pokemon = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

const usePokemon = () => {
  const { data, error, isLoading } = useSWR<Pokemon, Error>(
    "https://pokeapi.co/api/v2/pokemon?limit=5",
    fetcher
  );

  return {
    pokemon: data,
    isError: error,
    isLoading,
  };
};

export default usePokemon;
