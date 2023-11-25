"use client";

import { Container, Grid } from "@mui/material";
import PokemonCard from "../PokemonCard";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const PokemonList = () => {
  const [page, setPage] = useState(0);
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`,
    fetcher
  );
  const [pokemonList, setPokemonList] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);

  console.log("pokemonList", pokemonList);

  const elementRef = useRef(null);

  console.log("data", data);

  function onIntersection(entries) {
    const [firstEntry] = entries;

    console.log("onIntersection", data);
    if (firstEntry.isIntersecting && hasMore) {
      if (data?.next) {
        setPokemonList((prevList) => [...prevList, ...data?.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      rootMargin: "200px 0 0 0",
    });

    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [data]);

  return (
    <Container>
      <h1>Pokemon List</h1>

      <Grid container spacing={2} justifyContent="center">
        {pokemonList &&
          pokemonList.map((pokemon, index) => (
            <Grid key={index} item xs={6} md={4} lg={3}>
              <PokemonCard name={pokemon.name} url={pokemon.url} />
            </Grid>
          ))}
        {hasMore && <div ref={elementRef}>Loading...</div>}
      </Grid>
    </Container>
  );
};

export default PokemonList;
