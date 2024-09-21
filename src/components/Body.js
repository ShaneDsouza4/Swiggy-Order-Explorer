import RestaturantCard from "./RestaurantCard";
import resDataAPI from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

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
    console.log(
      "All Restaurants",
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setrestaurantList(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restaurantList.length == 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
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

        <button
          className="filter-btn"
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

      <div className="res-container">
        {filteredRestaurants.map((x) => (
          <Link key={x?.info?.id} to={"/restaurants/" + x?.info?.id}>
            <RestaturantCard resData={x} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
