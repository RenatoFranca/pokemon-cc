"use client";

import PokemonCard from "@/app/_components/PokemonCard";
import {
  Alert,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const Page = () => {
  const [favorites, setFavorites] = useState<number[] | null>(null);
  const noFavorites = !favorites || favorites.length === 0;

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
        <Grid item xs={12}>
          <Alert severity="warning">
            {`Heads up, Trainer! Your favorite Pokémon list is currently saved on
            your device's local storage. This means it might be gone if you
            clear your browser data or switch devices.`}
          </Alert>
        </Grid>
        {noFavorites && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5">
                  Looks like your Pokéball is feeling a bit light! Why not start
                  your Pokémon journey by adding some favorites?
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
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
