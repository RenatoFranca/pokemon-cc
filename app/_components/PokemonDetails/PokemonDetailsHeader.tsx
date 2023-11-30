import { CardHeader } from "./PokemonDetails.styles";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Typography } from "@mui/material";
import { PokedexNumber } from "../PokemonCard/PokemonCard.styles";

type PokemonDetailsHeader = {
  id?: number;
  name: string;
};

export const PokemonDetailsHeader = ({ id, name }: PokemonDetailsHeader) => {
  return (
    <CardHeader>
      <Link
        href="/"
        style={{ color: "black", display: "flex", paddingRight: "16px" }}
      >
        <KeyboardBackspaceIcon fontSize="large" sx={{ alignSelf: "center" }} />
      </Link>
      <Typography variant="h4" textTransform="capitalize">
        {name}
      </Typography>
      {id && (
        <PokedexNumber
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: "1.5rem" }}
        >
          {`#${id?.toString().padStart(4, "0")}`}
        </PokedexNumber>
      )}
    </CardHeader>
  );
};
