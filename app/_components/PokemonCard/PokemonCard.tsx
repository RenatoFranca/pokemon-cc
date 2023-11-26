"use client";

import { Card, CardActionArea, CardContent } from "@mui/material";
import { PokemonCardProps, PokemonResponse } from "./PokemonCard.types";
import { CardLink, Image, ImageBox, Name } from "./PokemonCard.styles";
import useSWR from "swr";
import fetcher from "@/app/_utils/fetcher";

const PokemonCard = ({ name, url }: PokemonCardProps) => {
  /*
    The useSWR hook is used to fetch data. We don't need to take care of the
    errors since Next.js is doing that for us with the error.txs file.

    Read more about Next.js error handling here:
    https://nextjs.org/docs/app/building-your-application/routing/error-handling
  */
  const { data, isLoading } = useSWR<PokemonResponse>(url, fetcher);

  // Show a loading indicator while the data is loading
  if (isLoading) return <div>Loading...</div>;

  // Destrucure the sprites to keep the code as clean as possible
  const { sprites } = data!!;

  return (
    /*
      Any component that is possible to move the props into the styled component
      file should be moved. This is to keep the component file with less code
    */
    <CardLink href={`/pokemon/${name}`}>
      <Card>
        <CardActionArea>
          <ImageBox>
            <Image src={sprites.front_default} alt={name} />
          </ImageBox>
          <CardContent>
            <Name>{name}</Name>
          </CardContent>
        </CardActionArea>
      </Card>
    </CardLink>
  );
};

export default PokemonCard;
