import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites | Pokémon CC",
  description: "My favorite Pokémon",
};

const FavoriteLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};

export default FavoriteLayout;
