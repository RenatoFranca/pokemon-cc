"use client";

import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ScaleIcon from "@mui/icons-material/Scale";
import HeightIcon from "@mui/icons-material/Height";
import { CardHeader, Image } from "./PokemonDetails.styles";
import Link from "next/link";
import PokemonTypes from "../PokemonTypes";
import { PokedexNumber } from "../PokemonCard/PokemonCard.styles";

type PokemonDetailsProps = {
  id: number;
  name: string;
  image: string;
  types: { type: { name: string }; slot: number }[];
  weight: number;
  height: number;
  abilities: { ability: { name: string } }[];
};

const PokemonDetails = ({
  id,
  name,
  image,
  types,
  weight,
  height,
  abilities,
}: PokemonDetailsProps) => {
  return (
    <Card sx={{ maxWidth: 500, width: "100%", position: "relative" }}>
      <PokedexNumber
        color="text.secondary"
        gutterBottom
        sx={{ fontSize: "1.5rem" }}
      >
        {`#${id?.toString().padStart(4, "0")}`}
      </PokedexNumber>
      <CardHeader>
        <Link
          href="/"
          style={{ color: "black", display: "flex", paddingRight: "16px" }}
        >
          <KeyboardBackspaceIcon
            fontSize="large"
            sx={{ alignSelf: "center" }}
          />
        </Link>
        <Typography variant="h4" textTransform="capitalize">
          {name}
        </Typography>
      </CardHeader>
      {image && <Image src={image} alt={name} />}
      <CardContent>
        <PokemonTypes types={types} />
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          marginTop={4}
        >
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingX={2}
            flexDirection="column"
          >
            <Typography
              variant="h6"
              flex={1}
              display="flex"
              alignItems="center"
              gap={1}
              fontSize="0.8rem"
            >
              <ScaleIcon fontSize="small" /> {weight * 0.1} kg
            </Typography>
            <Typography
              color="text.secondary"
              variant="h6"
              fontSize="0.8rem"
              marginTop={1}
            >
              Weight
            </Typography>
          </Box>
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderLeft="solid 1px #dbd9d9"
            borderRight="solid 1px #dbd9d9"
            paddingX={2}
            flexDirection="column"
          >
            <Typography
              variant="h6"
              flex={1}
              display="flex"
              alignItems="center"
              fontSize="0.8rem"
            >
              <HeightIcon fontSize="small" /> {(height * 0.1).toFixed(1)} m
            </Typography>
            <Typography
              color="text.secondary"
              variant="h6"
              fontSize="0.8rem"
              marginTop={1}
            >
              Height
            </Typography>
          </Box>
          <Box flex={1} display="flex" flexDirection="column" paddingX={2}>
            <Box flex={1} textTransform="capitalize">
              {abilities &&
                abilities.map(({ ability, slot }) => (
                  <Typography key={slot} variant="h6" fontSize="0.8rem">
                    {ability.name}
                  </Typography>
                ))}
            </Box>
            <Typography
              variant="h6"
              fontSize="0.8rem"
              textAlign="center"
              marginTop={1}
              color="text.secondary"
            >
              Abilities
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PokemonDetails;
