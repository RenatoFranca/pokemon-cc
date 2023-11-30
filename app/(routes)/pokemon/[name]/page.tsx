"use client";

import { PokemonDetails as Details } from "@/app/_components/PokemonDetails";
import { PageContainer } from "./page.styles";
import useSWR from "swr";
import { PokemonDetailsResponse } from "@/app/_components/PokemonDetails/PokemonDetails.types";
import fetcher from "@/app/_utils/fetcher";
import PokemonDetailsLoading from "@/app/_components/PokemonDetails/PokemonDetails.loading";
import { PageProps } from "./page.types";

const Page = ({ params }: PageProps) => {
  const name = params.name;
  const { data, isLoading } = useSWR<PokemonDetailsResponse>(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher
  );

  if (isLoading) return <PokemonDetailsLoading />;

  const id = data?.id;
  const types = data?.types;
  const image = data?.sprites?.front_default;
  const weight = data?.weight;
  const height = data?.height;
  const abilities = data?.abilities;

  return (
    <PageContainer>
      <Details.Root>
        <Details.Header id={id} name={name} />
        <Details.Image image={image} name={name} />
        <Details.Content>
          <Details.Types types={types} />
          <Details.Stats>
            <Details.Weight weight={weight} />
            <Details.Height height={height} />
            <Details.Abilities abilities={abilities} />
          </Details.Stats>
        </Details.Content>
      </Details.Root>
    </PageContainer>
  );
};

export default Page;
