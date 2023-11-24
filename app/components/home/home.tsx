import PokemonList from "../pokemon-list";
import HomeLayout from "./home.layout";

export default function Home() {
  return (
    <HomeLayout>
      <h1>Pokemon CC</h1>

      <PokemonList />
    </HomeLayout>
  );
}
