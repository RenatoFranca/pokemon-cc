import {
  BackIcon,
  BackLink,
  CardHeader,
  Name,
  PokedexNumber,
} from "./PokemonDetails.styles";
import { PokemonDetailsHeaderProps } from "./PokemonDetails.types";
import Favorite from "../Favorite";
import { Box, Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <CardHeader>
      <Box flex={1}>
        <Skeleton variant="text" width="50%" height={50} />
      </Box>
      <Skeleton variant="text" width="10%" height={50} />
    </CardHeader>
  );
};

export const PokemonDetailsHeader = ({
  id,
  name,
  isLoading,
}: PokemonDetailsHeaderProps) => {
  if (isLoading) return <Loading />;

  const pokedexNumber = `#${id?.toString().padStart(4, "0")}`;

  return (
    <CardHeader>
      <BackLink href={`/#${name}`}>
        <BackIcon />
      </BackLink>
      <Name>{name}</Name>
      <Favorite id={id} />
      {id && <PokedexNumber>{pokedexNumber}</PokedexNumber>}
    </CardHeader>
  );
};
