"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { CardHeader, Image } from "./PokemonDetails.styles";
import Link from "next/link";
import PokemonTypes from "../PokemonTypes";

type PokemonDetailsProps = {
  name: string;
  image: string;
  types: { type: { name: string }; slot: number }[];
};

const PokemonDetails = ({ name, image, types }: PokemonDetailsProps) => {
  return (
    <Card sx={{ maxWidth: 500, width: "100%" }}>
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
        <Typography variant="h4">{name}</Typography>
      </CardHeader>
      {image && <Image src={image} alt={name} />}
      <CardContent>
        <PokemonTypes types={types} />
      </CardContent>
    </Card>
  );
};

export default PokemonDetails;
