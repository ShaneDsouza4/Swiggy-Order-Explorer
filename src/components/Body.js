import RestaturantCard, { withPromotedLabel } from "./RestaurantCard";
import resDataAPI from "../../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  //console.log("Restaurant List>: ", filteredRestaurants);
  const RestaturantCardPromoted = withPromotedLabel(RestaturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   "All Restaurants",
    //   json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setrestaurantList(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlinStatus = useOnlinStatus();
  if (onlinStatus == false)
    return (
      <h1>Looks like you're offline. Please check your internet connection</h1>
    );

  if (restaurantList.length == 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border-2 border-black px-4 py-2"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = restaurantList.filter((x) =>
                x?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-300 m-4 rounded-lg"
            onClick={() => {
              const filteredEestaurantList = restaurantList.filter(
                (x) => x?.info?.avgRating > 4.0
              );
              setfilteredRestaurants(filteredEestaurantList);
              //setrestaurantList(filteredEestaurantList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>Username:</label>
          <input
            className="mx-2 p-2 border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((x) => (
          <Link key={x?.info?.id} to={"/restaurants/" + x?.info?.id}>
            {x?.info?.isOpen ? (
              <RestaturantCardPromoted resData={x} />
            ) : (
              <RestaturantCard resData={x} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
