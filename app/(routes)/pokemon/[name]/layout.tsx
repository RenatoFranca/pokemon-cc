import { Metadata } from "next";

const PokemonLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};

type Props = {
  params: { name: string };
};

// Update the website metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = params;

  // Capitalize the name
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    title: `${capitalizedName} | Pokémon CC`,
  };
}

export default PokemonLayout;
