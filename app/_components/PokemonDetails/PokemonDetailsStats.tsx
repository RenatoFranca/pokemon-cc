import { Stack } from "@mui/material";
import { PokemonDetailsStatsProps } from "./PokemonDetails.types";

export const PokemonDetailsStats = ({ children }: PokemonDetailsStatsProps) => {
  return (
    <Stack direction="row" spacing={1} justifyContent="center" marginTop={4}>
      {children}
    </Stack>
  );
};
