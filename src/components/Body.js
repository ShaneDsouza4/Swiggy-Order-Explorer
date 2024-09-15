import RestaturantCard from "./RestaurantCard";
import resDataAPI from "../../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resDataAPI.map((x) => (
          <RestaturantCard key={x.info.id} resData={x} />
        ))}
      </div>
    </div>
  );
};

export default Body;
