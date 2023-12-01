import { PokemonDetailsWeightProps } from "./PokemonDetails.types";
import {
  WeightBox,
  WeightIcon,
  WeightName,
  WeightTitle,
} from "./PokemonDetails.styles";
import { Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <WeightBox>
      <Skeleton variant="rounded" width="100%" height={60} />
    </WeightBox>
  );
};

export const PokemonDetailsWeight = ({
  weight,
  isLoading,
}: PokemonDetailsWeightProps) => {
  if (isLoading) return <Loading />;

  if (!weight) return null;

  const weightInKg = `${(weight * 0.1).toFixed(1)} kg`;

  return (
    <WeightBox>
      <WeightName>
        <WeightIcon /> {weightInKg}
      </WeightName>
      <WeightTitle>Weight</WeightTitle>
    </WeightBox>
  );
};
