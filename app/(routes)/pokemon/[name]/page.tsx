"use client";

import Evolution from "@/app/_components/Evolution/Evolution";
import { Container } from "@mui/material";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = ({ params }: { params: { name: string } }) => {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`,
    fetcher
  );

  console.log(data?.species?.url);

  // Species
  const {
    data: dataSpecies,
    error: errorSpecies,
    isLoading: isLoadingSpecies,
  } = useSWR(data?.species?.url, fetcher);

  // dataSpecies?.evolution_chain?.url
  // const {
  //   data: dataEvolution,
  //   error: errorEvolution,
  //   isLoading: isLoadingEvolution,
  // } = useSWR(dataSpecies?.evolution_chain?.url);

  return (
    <Container>
      My Pokemon: {params.name}
      {data && (
        <>
          <Image
            src={data.sprites.front_default}
            alt={params.name}
            height={200}
            width={200}
            style={{
              objectFit: "contain",
              height: "auto",
              maxHeight: 200,
              width: "100%",
            }}
          />
          <ul>
            <li>#{dataSpecies?.order.toString().padStart(4, "0")}</li>
            <li>
              Types:{" "}
              {data?.types &&
                data.types.map(({ type }) => type.name).join(", ")}
            </li>
            <li>Weight: {data.weight * 0.1} kg</li>
            <li>Height: {(data.height * 0.1).toFixed(1)} m</li>
            <li>
              Abilities:{" "}
              {data?.abilities &&
                data.abilities.map(({ ability }) => ability.name).join(", ")}
            </li>
            <li>Base experience: {data.base_experience}</li>
            <li>Color: {dataSpecies?.color?.name}</li>
          </ul>

          <Evolution url={dataSpecies?.evolution_chain?.url} />
        </>
      )}
    </Container>
  );
};

export default Page;
