import { PokemonDetailsHeightProps } from "./PokemonDetails.types";
import {
  HeightBox,
  HeightIcon,
  HeightName,
  HeightTitle,
} from "./PokemonDetails.styles";
import { Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <HeightBox>
      <Skeleton variant="rounded" width="100%" height={60} />
    </HeightBox>
  );
};

export const PokemonDetailsHeight = ({
  height,
  isLoading,
}: PokemonDetailsHeightProps) => {
  if (isLoading) return <Loading />;

  if (!height) return null;

  const heightInMeters = `${(height * 0.1).toFixed(1)} m`;

  return (
    <HeightBox>
      <HeightName>
        <HeightIcon /> {heightInMeters}
      </HeightName>
      <HeightTitle>Height</HeightTitle>
    </HeightBox>
  );
};
