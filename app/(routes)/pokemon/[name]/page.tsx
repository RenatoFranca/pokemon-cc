"use client";

import PokemonDetails from "@/app/_components/PokemonDetails";
import fetcher from "@/app/_utils/fetcher";
import { Container } from "@mui/material";
import useSWR from "swr";

const Page = ({ params }: { params: { name: string } }) => {
  const { data, error, isLoading } = useSWR<any>(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`,
    fetcher
  );

  return (
    <Container
      sx={{ marginTop: 10, display: "flex", justifyContent: "center" }}
    >
      <PokemonDetails
        id={data?.id}
        name={params.name}
        image={data?.sprites?.front_default}
        types={data?.types}
        weight={data?.weight}
        height={data?.height}
        abilities={data?.abilities}
      />
    </Container>
  );
};

export default Page;
