"use client";

import { Card, CardActionArea, CardContent } from "@mui/material";
import { PokemonCardProps, PokemonResponse } from "./PokemonCard.types";
import { CardLink, Image, Name, PokedexNumber } from "./PokemonCard.styles";
import useSWR from "swr";
import fetcher from "@/app/_utils/fetcher";

const PokemonCard = ({ name, url }: PokemonCardProps) => {
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
  if (isLoading) return <div>Loading...</div>;

  // Using destructuring to keep the code as clean as possible
  const { id, sprites } = data!!;

  return (
    /*
      Any component that is possible to move the props into the styled component
      file should be moved. This is to keep the component file with less code
    */
    <CardLink href={`/pokemon/${name}`}>
      <Card>
        <CardActionArea>
          <PokedexNumber color="text.secondary" gutterBottom>
            {`#${id.toString().padStart(4, "0")}`}
          </PokedexNumber>
          <Image src={sprites.front_default} alt={name} />
          <CardContent>
            <Name>{name}</Name>
          </CardContent>
        </CardActionArea>
      </Card>
    </CardLink>
  );
};

export default PokemonCard;
