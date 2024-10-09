import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestarantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const dummyData = "DummyText";

  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (restaurantInfo == null) return <Shimmer />;
  //console.log("restaurant Info: ", restaurantInfo);
  const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating } =
    restaurantInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  //console.log(restaurantInfo.cards[4].groupedCard.cardGroupMap.REGULAR);

  const catergory =
    restaurantInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (x) =>
        x.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log("Category: ", catergory);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>

      {/* Accordian for categories */}
      {catergory.map((x, index) => (
        /* Controlled Component  */
        <RestaurantCategory
          key={index}
          data={x?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => {
            setShowIndex(index);
            console.log("-->", index);
          }}
          key2={index}
          dummyData={dummyData}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
