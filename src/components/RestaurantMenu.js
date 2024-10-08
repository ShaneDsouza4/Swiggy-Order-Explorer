import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestarantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo == null) return <Shimmer />;
  console.log("restaurant Info: ", restaurantInfo);
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
  console.log("Category: ", catergory);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>

      {/* Accordian for categories */}
      {catergory.map((x, index) => (
        /* Accordian Header */
        <RestaurantCategory
          key={index}
          data={x?.card?.card}
          showItems={false}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
