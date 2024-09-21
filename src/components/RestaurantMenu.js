import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestarantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo == null) return <Shimmer />;
  console.log("restaurant Info: ", restaurantInfo);
  const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating } =
    restaurantInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((x) => (
          <li key={x?.info?.id || x?.card?.info?.id}>{x.card.info.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
