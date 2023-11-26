"use client";

import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { PokemonCardProps } from "./PokemonCard.types";
import Image from "next/image";
import { CardImage } from "./PokemonCard.styles";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const PokemonCard = ({ name, url }: PokemonCardProps) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  const types = data?.types.map((type) => type.type.name).join(", ");

  return (
    <Card variant="outlined">
      {!isLoading && (
        <CardActionArea>
          <CardImage>
            <Image
              src={data.sprites.front_default}
              alt={name}
              height={200}
              width={200}
              style={{ objectFit: "contain", width: "100%" }}
            />
          </CardImage>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {types}
            </Typography>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      )}
    </Card>
  );
};

export default PokemonCard;
