"use client";

import { PokemonDetails } from "@/app/_components/PokemonDetails";
import { PageContainer } from "./page.styles";
import useSWR from "swr";
import { PokemonDetailsResponse } from "@/app/_components/PokemonDetails/PokemonDetails.types";
import fetcher from "@/app/_utils/fetcher";
import PokemonDetailsLoading from "@/app/_components/PokemonDetails/PokemonDetails.loading";

const Page = ({ params }: { params: { name: string } }) => {
  const name = params.name;
  const { data, error, isLoading } = useSWR<PokemonDetailsResponse>(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher
  );

  if (isLoading) return <PokemonDetailsLoading />;

  const id = data?.id;
  const types = data?.types;
  const image = data?.sprites.front_default;
  const weight = data?.weight;
  const height = data?.height;
  const abilities = data?.abilities;

  return (
    <PageContainer>
      <PokemonDetails.Root>
        <PokemonDetails.Header id={id} name={name} />
        <PokemonDetails.Image image={image} name={name} />
        <PokemonDetails.Content>
          <PokemonDetails.Types types={types} />
          <PokemonDetails.Stats>
            <PokemonDetails.Weight weight={weight} />
            <PokemonDetails.Height height={height} />
            <PokemonDetails.Abilities abilities={abilities} />
          </PokemonDetails.Stats>
        </PokemonDetails.Content>
      </PokemonDetails.Root>
    </PageContainer>
  );
};

export default Page;
