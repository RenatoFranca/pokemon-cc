import axios from "axios";

type GenerationResult = {
  name: string;
  url: string;
};

export type GenerationResponse = {
  results: GenerationResult[];
};

export const getGenerations = async () => {
  const { data } = await axios.get<GenerationResponse>(
    "https://pokeapi.co/api/v2/generation"
  );

  return data?.results;
};
