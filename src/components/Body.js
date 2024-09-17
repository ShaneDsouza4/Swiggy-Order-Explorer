import RestaturantCard from "./RestaurantCard";
import resDataAPI from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

  // Local State Variable - Super powerful variable
  const [restaurantList, setrestaurantList ] = useState([])

  useEffect(()=>{
    fetchData();
  }, [])
  
  const fetchData = async () => {

      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      //console.log("-->", json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)   
      setrestaurantList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  };

  //Conditional Rendering
  return restaurantList.length == 0 ? <Shimmer/> : (
    <div className="body">

      <div className="filter">
        <button className="filter-btn" onClick={ ()=> { 
              
              const filteredEestaurantList = restaurantList.filter(
                (x) => x.info.avgRating > 4.5
              )
              console.log(filteredEestaurantList)
              setrestaurantList(filteredEestaurantList);
          }} 
        >
          Top Rated Restaurants
        </button>
      </div>


      <div className="res-container"> 
        {restaurantList.map((x) => (
          <RestaturantCard key={x.info?.id} resData={x} />
        ))}
      </div>
    </div>
  );
};

export default Body;
