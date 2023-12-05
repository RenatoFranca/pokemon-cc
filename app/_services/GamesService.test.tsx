import axios from "axios";
import { getGenerations } from "./GamesService";
import { GenerationResponse } from "./GamesService";

jest.mock("axios");

describe("getGenerations", () => {
  it("should fetch data from an API", async () => {
    const mockData: GenerationResponse = {
      results: [
        { name: "generation1", url: "https://pokeapi.co/api/v2/generation/1/" },
        { name: "generation2", url: "https://pokeapi.co/api/v2/generation/2/" },
      ],
    };

    // Mock axios.get to resolve with mockData
    (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

    const result = await getGenerations();
    expect(result).toEqual(mockData.results);

    expect(axios.get).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/generation"
    );
  });

  it("shoulc show an error when the request fails", async () => {
    // Mock axios.get to reject with an error
    (axios.get as jest.Mock).mockRejectedValue(new Error("API Error"));

    await expect(getGenerations()).rejects.toThrow("API Error");
  });
});
