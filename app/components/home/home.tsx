import PokemonList from "../PokemonList";
import HomeLayout from "./Home.layout";

export default function Home() {
  return (
    <HomeLayout>
      <h1>Pokemon CC</h1>

      <PokemonList />
    </HomeLayout>
  );
}
