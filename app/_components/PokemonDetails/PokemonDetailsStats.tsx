import { Stack } from "@mui/material";
import { ReactNode } from "react";

type PokemonDetailsStats = {
  children: ReactNode;
};

export const PokemonDetailsStats = ({ children }: PokemonDetailsStats) => {
  return (
    <Stack direction="row" spacing={1} justifyContent="center" marginTop={4}>
      {children}
    </Stack>
  );
};
