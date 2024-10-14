import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../../mocks/mockRestMenu.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//Fake the fetch with Mock data
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Restaurant Menu component", async () => {
  //Use act to render async
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  //Click on the accordian panel
  const accordianHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordianHeader);

  //Check food items list count
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(20);

  //Header should now have cart 0 items, initial state
  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  //Find Add Buttons
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  //console.log(addBtns.length);

  //Click on first button
  fireEvent.click(addBtns[0]);

  //Header should now have cart 1 items
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  //Click on second button
  fireEvent.click(addBtns[1]);

  //Header should now have cart 2 items
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  //Check items were added in Cart Page that uses Item Lists
  expect(screen.getAllByTestId("foodItems").length).toBe(22);

  //Check clear cart
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  //Header should now have cart 0 items
  //Food items should be reduced
  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(20);
});
