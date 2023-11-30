import { Card } from "@mui/material";
import { ReactNode } from "react";

type PokemonDetailsRootProps = {
  children: ReactNode;
};

export const PokemonDetailsRoot = ({ children }: PokemonDetailsRootProps) => {
  return (
    <Card sx={{ maxWidth: 500, width: "100%", position: "relative" }}>
      {children}
    </Card>
  );
};
