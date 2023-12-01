import { Box, Skeleton } from "@mui/material";
import { Image } from "./PokemonDetails.styles";
import { PokemonDetailsImageProps } from "./PokemonDetails.types";

const Loading = () => {
  return (
    <Box padding={2} height={200}>
      <Skeleton variant="rounded" width="100%" height="100%" />
    </Box>
  );
};

export const PokemonDetailsImage = ({
  image,
  name,
  isLoading,
}: PokemonDetailsImageProps) => {
  if (isLoading) return <Loading />;

  image = image || "/images/whos-that.png";

  return <>{image && <Image src={image} alt={name} />}</>;
};
