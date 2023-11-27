"use client";

import PokemonCard from "@/app/_components/PokemonCard";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";

const Page = () => {
  const [favorites, setFavorites] = useState<number[] | null>(null);

  useEffect(() => {
    const storage = localStorage.getItem("favorite");

    if (storage) {
      setFavorites(JSON.parse(storage));
    }
  }, []);

  return (
    <Container sx={{ marginTop: 10, marginBottom: 4 }}>
      <h2>Pokémon Favorites</h2>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {favorites &&
          favorites.map((pokemon, index) => (
            <Grid key={index} item xs={6} md={4} lg={3}>
              <PokemonCard
                url={`https://pokeapi.co/api/v2/pokemon/${pokemon}`}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Page;
