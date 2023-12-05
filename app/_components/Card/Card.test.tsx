import { render } from "@testing-library/react";
import Card from ".";

const propsMock = {
  id: 1,
  name: "bulbasaur",
};

describe("Card", () => {
  it("should show the pokemon name", () => {
    const { getByText } = render(<Card {...propsMock} />);

    expect(getByText(/bulbasaur/i)).toBeInTheDocument();
  });

  it("should show the Pokémon number", () => {
    const { getByText } = render(<Card {...propsMock} />);

    expect(getByText(/#001/i)).toBeInTheDocument();
  });

  it("should show the Pokémon image", () => {
    const { getByRole } = render(<Card {...propsMock} />);

    expect(getByRole("img", { name: /bulbasaur/ })).toBeInTheDocument();
  });
});
