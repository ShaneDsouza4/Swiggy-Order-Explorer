import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../mocks/mockRestaurantListData.json";
import { BrowserRouter } from "react-router-dom";

// Mock fetch globally to fake API call
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should search restaurant list for tea text input", async () => {
  // Use act() from 'react' to wrap the asynchronous fetch and rendering
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchButton = screen.getByRole("button", { name: "Search" });
  //console.log("Search Button-->", searchButton);

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "tea" } });
  fireEvent.click(searchButton);

  //Assert: Screen should load 6 cards
  const cards = screen.getAllByTestId("resCard");
  //console.log("LEN--->", cards.length);

  expect(cards.length).toBe(1);
});

it("Should filter top retaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const cards = screen.getAllByTestId("resCard");
  console.log(cards.length);

  expect(cards.length).toBe(6);
});
