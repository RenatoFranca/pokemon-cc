"use client";

import PokemonDetails from "@/app/_components/PokemonDetails";
import { Container } from "@mui/material";

const Page = ({ params }: { params: { name: string } }) => {
  return (
    <Container
      sx={{ marginTop: 10, display: "flex", justifyContent: "center" }}
    >
      <PokemonDetails name={params.name} />
    </Container>
  );
};

export default Page;
