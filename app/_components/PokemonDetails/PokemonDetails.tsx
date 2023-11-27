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

type PokemonDetailsProps = {
  name: string;
  image: string;
  types: { type: { name: string } }[];
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
        <Stack direction="row" spacing={1} justifyContent="center">
          {types &&
            types.map(({ type, slot }) => (
              <Chip key={slot} size="small" label={type.name} />
            ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PokemonDetails;
