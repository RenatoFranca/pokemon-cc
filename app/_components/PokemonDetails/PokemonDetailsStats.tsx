import { Stack } from "@mui/material";
import { PokemonDetailsStatsProps } from "./PokemonDetails.types";
import { StatsStack } from "./PokemonDetails.styles";

export const PokemonDetailsStats = ({ children }: PokemonDetailsStatsProps) => {
  return <StatsStack>{children}</StatsStack>;
};
