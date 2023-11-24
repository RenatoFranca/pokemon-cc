import { render } from "@testing-library/react";
import PokemonCard from ".";

describe("PokemonCard", () => {
  it("should have a pokemon name", () => {
    const { getByText } = render(<PokemonCard name="Pikachu" url="" />);

    expect(getByText(/Pikachu/i)).toBeInTheDocument();
  });

  it("should have a pokemon image", () => {
    const { getByAltText } = render(<PokemonCard name="Pikachu" url="" />);

    expect(getByAltText(/Pikachu/i)).toBeInTheDocument();
  });

  it("should have a pokemon type", () => {
    const { getByText } = render(<PokemonCard name="Pikachu" url="" />);

    expect(getByText(/electric/i)).toBeInTheDocument();
  });

  it("should have an action button to see more details", () => {
    const { getByText } = render(<PokemonCard name="Pikachu" url="" />);

    expect(getByText(/See more/i)).toBeInTheDocument();
  });
});
