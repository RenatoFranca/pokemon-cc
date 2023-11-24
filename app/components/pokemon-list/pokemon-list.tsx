import { Box, Container } from "@mui/material";
import { PokemonResponse } from "./pokemon-list.types";
import PokemonCard from "../pokemon-card";

const getPokemonList = async (): Promise<PokemonResponse> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const PokemonList = async () => {
  const { results } = await getPokemonList();

  console.log("results", results);

  return (
    <Container>
      <h1>Pokemon List</h1>

      <>
        {results.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} url={pokemon.url} />
        ))}
      </>
    </Container>
  );
};

export default PokemonList;
