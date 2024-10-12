import { render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";

it("Shold render the Body componet with Search button", () => {
  render(<Body />);
  const button = screen.getByText("Search");
  expect(button).toBeInTheDocument();
});
