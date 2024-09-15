import RestaturantCard from "./RestaurantCard";
import resDataAPI from "../../utils/mockData";
import { useState } from "react";


const Body = () => {

  // Local State Variable - Super powerful variable
  const [restaurantList, setrestaurantList ] = useState(resDataAPI)

  
  return (
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
