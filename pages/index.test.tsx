/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import App from ".";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Batteries Included Next.js" })
    ).toBeInTheDocument();
  });
});
