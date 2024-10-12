import { render, screen } from "@testing-library/react";
import RestaturantCard from "../RestaurantCard";
import MOCK_DATA from "../../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props data", () => {
  console.log("MOck__>", MOCK_DATA);
  render(<RestaturantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Irani Std. Tea");

  expect(name).toBeInTheDocument("Irani Std. Tea");
});
