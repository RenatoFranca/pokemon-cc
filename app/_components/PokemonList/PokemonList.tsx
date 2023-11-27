"use client";

import { Box, Container, Grid } from "@mui/material";
import PokemonCard from "../PokemonCard";
import { useEffect } from "react";
import useSWRInfinite from "swr/infinite";
import { useInView } from "react-intersection-observer";
import fetcher from "@/app/_utils/fetcher";

const PokemonList = () => {
  const { data, setSize, size, isValidating } = useSWRInfinite(
    (index) =>
      `https://pokeapi.co/api/v2/pokemon?offset=${index * 20}&limit=20`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const [ref, inView] = useInView();

  const list: any[] = data ? data.map((v) => v.results).flat() : [];

  console.log("In view", size);
  useEffect(() => {
    if (inView && !isValidating) {
      // setSize((size) => size + 1);
    }
  }, [inView]);

  return (
    <Container sx={{ marginTop: 10, marginBottom: 4 }}>
      <h2>Pokemon List</h2>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {list.map((pokemon, index) => (
          <Grid
            ref={list.length === index + 1 ? ref : null}
            key={index}
            item
            xs={6}
            md={4}
            lg={3}
          >
            <PokemonCard name={pokemon.name} url={pokemon.url} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PokemonList;
