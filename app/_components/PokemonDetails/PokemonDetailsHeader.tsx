import {
  BackIcon,
  BackLink,
  CardHeader,
  Favorite,
  Name,
  NotFavorite,
  PokedexNumber,
} from "./PokemonDetails.styles";
import { useEffect, useState } from "react";
import { PokemonDetailsHeaderProps } from "./PokemonDetails.types";

export const PokemonDetailsHeader = ({
  id,
  name,
}: PokemonDetailsHeaderProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const pokedexNumber = `#${id?.toString().padStart(4, "0")}`;

  useEffect(() => {
    const storage = localStorage.getItem("favorite");

    if (storage) {
      let favorites = JSON.parse(storage);
      const hasFavorite = favorites.find((f: number) => f == id);

      setIsFavorite(hasFavorite);
    }
  }, [id]);

  const toggleFavorite = (id: number) => {
    const storage = localStorage.getItem("favorite");
    let favorites = [];

    if (storage) {
      favorites = JSON.parse(storage);
      favorites = favorites.filter((f: number) => f !== id);
    }

    if (!isFavorite || !storage) {
      favorites.push(id);
    }

    localStorage.setItem("favorite", JSON.stringify(favorites));
    setIsFavorite((prev) => !prev);
  };

  return (
    <CardHeader>
      <BackLink href={`/#${name}`}>
        <BackIcon />
      </BackLink>
      <Name>{name}</Name>
      {!isFavorite && id && <NotFavorite onClick={() => toggleFavorite(id)} />}
      {isFavorite && id && <Favorite onClick={() => toggleFavorite(id)} />}
      {id && <PokedexNumber>{pokedexNumber}</PokedexNumber>}
    </CardHeader>
  );
};
