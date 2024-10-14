# Swiggy Order Explorer

## Overview

Swiggy Order Explorer is a React application built from scratch that utilizes Swiggy's live API to explore restaurants, menus, and add items to the cart. It also includes functionalities like searching for restaurants, filtering top-rated restaurants, updating the username, and managing the cart, along with offline detection and more.

## Features

- **Fetch Restaurants:** Used Swiggy's live API to get and display a list of restaurants.
- **Search Filter:** Allows users to search for specific restaurants.
- **Top-Rated Filter:** Filters and displays only top-rated restaurants.
- **Update Username:** Users can update their username using an input box (implemented using Context API).
- **Offline Detection:** Checks if the user is connected to the internet.
- **View Restaurant Menu:** Displays restaurant menus with categorized items.
- **Add Items to Cart:** Users can add items to the cart.
- **View Cart:** A dedicated cart page shows all the items added, with the total displayed in the header.
- **Clear Cart:** Users can clear the cart (implemented using Redux).
- **About Page:** Displays user details fetched via GitHub API.
  
## Application Structure

### Component Planning

- **Low-Level Planning** for structuring the app components.
- **React Components:** Created functional and class-based components with proper separation of concerns.
  
### Key Technologies and Concepts

1. **Installed React and ReactDOM**
2. **Used Parcel** as a bundler for fast and optimized builds.
3. **BrowsersList:** Configured to ensure compatibility with different browsers.
4. **JSX:** Used JSX syntax to build UI components.
5. **Functional Components & Class-Based Components**
6. **React Lifecycle Methods:** Specifically, the Mounting Phase.
7. **Props:** Passed data using props, ensuring reusability.
8. **Unique Keys:** Added for rendering lists efficiently.
9. **Hooks:**
   - `useState` and `useEffect` for state and side-effect management.
   - **Custom Hooks** for reusability across components.
10. **Exports:** Utilized named and default exports for module management.
11. **Dynamic Routing:** Implemented routing using `react-router-dom`.
12. **Shimmer UI:** Loading shimmer effect for a better user experience.
13. **Window Event Listener:** Checked if the user is online or offline.
14. **Lazy Loading:** Implemented lazy loading for performance optimization.
15. **Tailwind CSS:** Used for styling the application.
16. **Higher-Order Components (HOCs):** For component wrapping.
17. **Controlled Components:** Used controlled inputs for form handling.
18. **Uncontrolled Components:** Implemented where necessary.
19. **Prop Drilling:** Managed prop drilling where context wasn't feasible.
20. **Context API:** Used for global state management, such as updating the username.
21. **Redux:** Applied Redux for state management, especially in cart functionality.
22. **Unit Testing:** Added unit tests for component functionality.
23. **Integration Testing:** Ensured proper integration of components and data flow.
