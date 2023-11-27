import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites | Pokemon CC",
  description: "My favorite pokemons",
};

const FavoriteLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};

export default FavoriteLayout;
