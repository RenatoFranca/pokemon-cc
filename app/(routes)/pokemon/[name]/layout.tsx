import { Metadata } from "next";

const PokemonLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};

type Props = {
  params: { name: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = params;

  return {
    title: `${name} | Pokemon CC`,
  };
}

export default PokemonLayout;
