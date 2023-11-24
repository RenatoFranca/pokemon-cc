import { render } from "@testing-library/react";
import PokemonList from ".";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          { name: "Pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
          { name: "Charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
        ],
      }),
    ok: true,
  })
) as jest.Mock;

describe("PokemonList", () => {
  it("should have a list of pokemons", async () => {
    // Testing async components: https://github.com/vercel/next.js/issues/42292#issuecomment-1607518245
    const { getByText } = render(await (async () => await PokemonList())());

    expect(getByText(/Pikachu/i)).toBeInTheDocument();
    expect(getByText(/Charmander/i)).toBeInTheDocument();
  });
});
