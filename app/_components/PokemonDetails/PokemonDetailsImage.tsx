import { Image } from "./PokemonDetails.styles";
import { PokemonDetailsImageProps } from "./PokemonDetails.types";
import alternativeImage from "/public/images/whos-that.png";

export const PokemonDetailsImage = ({
  image,
  name,
}: PokemonDetailsImageProps) => {
  image = image || alternativeImage.src;

  return <>{image && <Image src={image} alt={name} />}</>;
};
