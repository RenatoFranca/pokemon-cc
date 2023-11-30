"use client";

import { Container } from "@mui/material";
import PokemonCard from "../PokemonCard";
import { useEffect } from "react";
import useSWRInfinite from "swr/infinite";
import { useInView } from "react-intersection-observer";
import fetcher from "@/app/_utils/fetcher";
import { Grid, GridItem, Loading, ProgressIcon } from "./PokemonList.styles";

const PokemonList = () => {
  const { data, setSize, isLoading } = useSWRInfinite(
    (index) =>
      `https://pokeapi.co/api/v2/pokemon?offset=${index * 20}&limit=20`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const [ref, inView] = useInView({ rootMargin: "200px" });
  const getItemRef = (index: number) =>
    list.length === index + 1 ? ref : null;

  const list: any[] = data ? data.map((v) => v.results).flat() : [];

  const hasNextPage = () => {
    const [lastPage] = data?.slice(-1) || [];

    return lastPage?.next;
  };

  useEffect(() => {
    if (inView && !isLoading && hasNextPage()) {
      setSize((size) => size + 1);
    }
  }, [inView]);

  return (
    <Container sx={{ marginTop: 10, marginBottom: 4 }}>
      <h2>Pokémon List</h2>
      <Grid>
        {list.map((pokemon, index) => (
          <GridItem ref={getItemRef(index)} key={index}>
            <PokemonCard url={pokemon.url} />
          </GridItem>
        ))}
        {isLoading && (
          <Loading>
            <ProgressIcon />
          </Loading>
        )}
      </Grid>
    </Container>
  );
};

export default PokemonList;
