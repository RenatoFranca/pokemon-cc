import { useEffect, useState } from "react";
import { EmptyStar, FullStar } from "./Favorite.styles";
import { FavoriteProps } from "./Favorite.types";

const Favorite = ({ id, display = false, className }: FavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const No = EmptyStar;
  const Yes = FullStar;
  const Icon = isFavorite ? Yes : No;

  useEffect(() => {
    const storage = localStorage.getItem("favorite");

    if (storage) {
      let favorites = JSON.parse(storage);
      const hasFavorite = favorites.find((f: number) => f == id);

      setIsFavorite(hasFavorite);
    }
  }, [id]);

  const toggleFavorite = (id: number) => {
    if (display) return;

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

  if (!id || (display && !isFavorite)) return null;

  return <Icon className={className} onClick={() => toggleFavorite(id)} />;
};

export default Favorite;
