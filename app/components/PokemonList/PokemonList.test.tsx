import { render } from "@testing-library/react";
import PokemonList from ".";
import PokemonCard from "../PokemonCard";

jest.mock("../PokemonCard", () => {
  const MockedPokemonCard = () => {
    return <>POKEMON CARD</>;
  };
  MockedPokemonCard.displayName = "PokemonCard";
  return MockedPokemonCard;
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
          { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
        ],
      }),
    ok: true,
  })
) as jest.Mock;

describe("PokemonList", () => {
  it("should have a list with two pokemon", async () => {
    // Testing async components: https://github.com/vercel/next.js/issues/42292#issuecomment-1607518245
    const { getAllByText } = render(await (async () => await PokemonList())());

    expect(getAllByText(/POKEMON CARD/i)).toHaveLength(2);
  });
});
