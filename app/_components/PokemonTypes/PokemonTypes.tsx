import { Chip, ChipPropsColorOverrides, Skeleton, Stack } from "@mui/material";
import React from "react";
import { OverridableStringUnion } from "@mui/types";

type PokemonTypesProps = {
  types?: { type: { name: string }; slot: number }[];
  isLoading?: boolean;
};

const Loading = () => {
  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      <Skeleton variant="text" width="30%" height={50} />
    </Stack>
  );
};

const PokemonTypes = ({ types, isLoading }: PokemonTypesProps) => {
  if (isLoading) return <Loading />;

  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      {types &&
        types.map(({ type, slot }) => (
          <Chip
            key={slot}
            size="small"
            color={
              type.name as OverridableStringUnion<
                | "default"
                | "error"
                | "primary"
                | "secondary"
                | "info"
                | "success"
                | "warning",
                ChipPropsColorOverrides
              >
            }
            label={type.name}
          />
        ))}
    </Stack>
  );
};

export default PokemonTypes;
