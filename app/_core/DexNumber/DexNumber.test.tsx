import { render } from "@testing-library/react";
import DexNumber from "./DexNumber";

describe("DexNumber Component", () => {
  it("should render correctly with a valid number", () => {
    const { getByText } = render(<DexNumber value={42} />);
    const numberElement = getByText("#042");

    expect(numberElement).toBeInTheDocument();
  });

  it("should handle invalid data if a string is passed", () => {
    const props = {
      value: "invalid data" as unknown as number,
    };

    // Mock console.error to avoid the error message to be printed in the console
    const originalConsoleError = console.error;
    console.error = jest.fn();

    let errorCaught;
    try {
      render(<DexNumber {...props} />);
    } catch (error: any) {
      errorCaught = error.message;
    }

    // Restore console.error
    console.error = originalConsoleError;

    expect(errorCaught).toBe("Invalid data type for DexNumber");
  });

  it("should handle invalid data if a float number is passed", () => {
    const props = {
      value: 42.42,
    };

    // Mock console.error to avoid the error message to be printed in the console
    const originalConsoleError = console.error;
    console.error = jest.fn();

    let errorCaught;
    try {
      render(<DexNumber {...props} />);
    } catch (error: any) {
      errorCaught = error.message;
    }

    // Restore console.error
    console.error = originalConsoleError;

    expect(errorCaught).toBe("Invalid data type for DexNumber");
  });
});
