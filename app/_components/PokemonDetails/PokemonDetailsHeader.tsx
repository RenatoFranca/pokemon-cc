import { CardHeader, Favorite, NotFavorite } from "./PokemonDetails.styles";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Typography } from "@mui/material";
import { PokedexNumber } from "../PokemonCard/PokemonCard.styles";
import { useEffect, useState } from "react";
import { PokemonDetailsHeaderProps } from "./PokemonDetails.types";

export const PokemonDetailsHeader = ({
  id,
  name,
}: PokemonDetailsHeaderProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem("favorite");

    if (storage) {
      let favorites = JSON.parse(storage);
      const hasFavorite = favorites.find((f: number) => f == id);

      setIsFavorite(hasFavorite);
    }
  }, [id]);

  const addFavorite = (id: number) => {
    const storage = localStorage.getItem("favorite");
    let favorites = [];

    if (storage) {
      favorites = JSON.parse(storage);
    }

    favorites.push(id);
    localStorage.setItem("favorite", JSON.stringify(favorites));

    setIsFavorite(true);
  };

  const removeFavorite = (id: number) => {
    const storage = localStorage.getItem("favorite");
    let favorites = [];

    if (storage) {
      favorites = JSON.parse(storage);
      favorites = favorites.filter((f: number) => f !== id);

      localStorage.setItem("favorite", JSON.stringify(favorites));

      setIsFavorite(false);
    }
  };

  return (
    <CardHeader>
      <Link
        href={`/#${name}`}
        style={{ color: "black", display: "flex", paddingRight: "16px" }}
      >
        <KeyboardBackspaceIcon fontSize="large" sx={{ alignSelf: "center" }} />
      </Link>
      <Typography variant="h4" textTransform="capitalize">
        {name}
      </Typography>
      {!isFavorite && id && (
        <NotFavorite
          onClick={() => addFavorite(id)}
          fontSize="large"
          sx={{ alignSelf: "center" }}
        />
      )}
      {isFavorite && id && (
        <Favorite
          onClick={() => removeFavorite(id)}
          fontSize="large"
          sx={{ alignSelf: "center" }}
        />
      )}
      {id && (
        <PokedexNumber
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: "1.5rem" }}
        >
          {`#${id?.toString().padStart(4, "0")}`}
        </PokedexNumber>
      )}
    </CardHeader>
  );
};
