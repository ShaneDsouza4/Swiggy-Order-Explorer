import { useEffect, useState } from "react";
import { REST_MENU_URL } from "./contants";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(REST_MENU_URL + resId);

    const json = await data.json();
    setRestaurantInfo(json.data);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
