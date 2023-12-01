import { Image } from "./PokemonDetails.styles";
import { PokemonDetailsImageProps } from "./PokemonDetails.types";

export const PokemonDetailsImage = ({
  image,
  name,
}: PokemonDetailsImageProps) => {
  const alternativeImage = "/images/whos-that.png";
  image = image || alternativeImage;

  return <>{image && <Image src={image} alt={name} />}</>;
};
