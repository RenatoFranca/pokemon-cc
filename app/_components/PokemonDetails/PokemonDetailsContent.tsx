import { CardContent } from "@mui/material";
import { PokemonDetailsContentProps } from "./PokemonDetails.types";

export const PokemonDetailsContent = ({
  children,
}: PokemonDetailsContentProps) => {
  return <CardContent>{children}</CardContent>;
};
