"use client";

import PokemonDetails from "@/app/_components/PokemonDetails";
import fetcher from "@/app/_utils/fetcher";
import { Container } from "@mui/material";
import useSWR from "swr";

const Page = ({ params }: { params: { name: string } }) => {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`,
    fetcher
  );

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
      {/* {data && (
        <>
          <ul>
            <li>#{dataSpecies?.order.toString().padStart(4, "0")}</li>
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
      )} */}
    </Container>
  );
};

export default Page;
