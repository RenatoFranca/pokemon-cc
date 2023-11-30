import { CardContent } from "@mui/material";
import { ReactNode } from "react";

type PokemonDetailsContentProps = {
  children: ReactNode;
};

export const PokemonDetailsContent = ({
  children,
}: PokemonDetailsContentProps) => {
  return <CardContent>{children}</CardContent>;
};
