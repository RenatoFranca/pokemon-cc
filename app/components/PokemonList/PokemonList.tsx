import { Box, Container, Grid } from "@mui/material";
import { PokemonResponse } from "./PokemonList.types";
import PokemonCard from "../PokemonCard";

const getPokemonList = async (): Promise<PokemonResponse> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");

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

      <Grid container spacing={2} justifyContent="center">
        {results.map((pokemon, index) => (
          <Grid key={index} item xs={6} md={4} lg={3}>
            <PokemonCard name={pokemon.name} url={pokemon.url} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PokemonList;
