"use client";

import { CardActionArea, CardContent } from "@mui/material";
import { PokemonCardProps, PokemonResponse } from "./PokemonCard.types";
import {
  Anchor,
  Card,
  CardLink,
  Effects,
  Image,
  Name,
  PokedexNumber,
} from "./PokemonCard.styles";
import useSWR from "swr";
import fetcher from "@/app/_utils/fetcher";
import PokemonCardLoading from "./PokemonCard.loading";
import { motion } from "framer-motion";

const PokemonCard = ({ url }: PokemonCardProps) => {
  /*
    The useSWR hook is used to fetch data. We don't need to take care of the
    errors since Next.js is doing that for us with the error.txs file.

    Read more about Next.js error handling here:
    https://nextjs.org/docs/app/building-your-application/routing/error-handling
  */
  const { data, isLoading } = useSWR<PokemonResponse>(url, fetcher, {
    revalidateOnFocus: false,
  });

  // Show a loading indicator while the data is loading
  if (isLoading) return <PokemonCardLoading />;

  // Using destructuring to keep the code as clean as possible
  const { id, name, sprites } = data!!;
  const pokedexNumber = `#${id.toString().padStart(4, "0")}`;
  const pokemonImage = sprites.front_default;

  return (
    /*
      Any component that is possible to move the props into the styled component
      file should be moved. This is to keep the component file with less code
    */
    <Effects>
      <CardLink href={`/pokemon/${name}`}>
        <Card>
          <Anchor id={name} />
          <CardActionArea>
            <PokedexNumber>{pokedexNumber}</PokedexNumber>
            {pokemonImage && <Image src={pokemonImage} alt={name} />}
            <CardContent>
              <Name>{name}</Name>
            </CardContent>
          </CardActionArea>
        </Card>
      </CardLink>
    </Effects>
  );
};

export default PokemonCard;
