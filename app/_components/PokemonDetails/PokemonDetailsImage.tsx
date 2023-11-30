import { Image } from "./PokemonDetails.styles";
import { PokemonDetailsImageProps } from "./PokemonDetails.types";

export const PokemonDetailsImage = ({
  image,
  name,
}: PokemonDetailsImageProps) => {
  return <>{image && <Image src={image} alt={name} />}</>;
};
