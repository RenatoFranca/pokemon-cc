import { render, screen } from "@testing-library/react";
import PokemonCard from ".";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
        types: [
          {
            type: {
              name: "electric",
            },
          },
        ],
      }),
    ok: true,
  })
) as jest.Mock;

describe("PokemonCard", () => {
  beforeEach(async () => {
    render(
      await (async () => await PokemonCard({ name: "Pikachu", url: "" }))()
    );
  });

  it("should have a pokemon name", () => {
    expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
  });

  it("should have a pokemon image", () => {
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should have a pokemon type", () => {
    expect(screen.getByText(/electric/i)).toBeInTheDocument();
  });

  it("should have an action button to see more details", () => {
    expect(screen.getByText(/See details/i)).toBeInTheDocument();
  });
});
