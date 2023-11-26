"use client";

import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { PokemonCardProps } from "./PokemonCard.types";
import Image from "next/image";
import { CardImage, CardLink, Name } from "./PokemonCard.styles";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const PokemonCard = ({ name, url }: PokemonCardProps) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  return (
    <CardLink href={`/pokemon/${name}`}>
      <Card variant="outlined">
        {!isLoading && (
          <CardActionArea>
            <CardImage>
              <Image
                src={data.sprites.front_default}
                alt={name}
                height={200}
                width={200}
                style={{
                  objectFit: "contain",
                  height: "auto",
                  maxHeight: 200,
                  width: "100%",
                }}
              />
            </CardImage>
            <CardContent>
              <Name>{name}</Name>
            </CardContent>
          </CardActionArea>
        )}
      </Card>
    </CardLink>
  );
};

export default PokemonCard;
