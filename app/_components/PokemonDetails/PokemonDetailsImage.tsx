import { type } from "os";
import { Image } from "./PokemonDetails.styles";

type PokemonDetailsImageProps = {
  image?: string;
  name: string;
};

export const PokemonDetailsImage = ({
  image,
  name,
}: PokemonDetailsImageProps) => {
  return <>{image && <Image src={image} alt={name} />}</>;
};
