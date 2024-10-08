import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const { data } = props;

  const { showItems } = props;

  //const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
    console.log("Clicked");
  };

  //console.log(">>", data);
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards}></ItemList>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
