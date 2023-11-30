import {
  BackIcon,
  BackLink,
  CardHeader,
  Name,
  PokedexNumber,
} from "./PokemonDetails.styles";
import { PokemonDetailsHeaderProps } from "./PokemonDetails.types";
import Favorite from "../Favorite";

export const PokemonDetailsHeader = ({
  id,
  name,
}: PokemonDetailsHeaderProps) => {
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
