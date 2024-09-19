import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { REST_MENU_URL } from "../../utils/contants"

const RestaurantMenu = () => {

    const [restaurantInfo, setRestaurantInfo] = useState(null)

    const {resId} = useParams();

 
    useEffect(()=>{
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(
            REST_MENU_URL+resId
        )

        const json = await data.json()
        setRestaurantInfo(json.data)
    }

    
    if (restaurantInfo == null) return <Shimmer/> 
    console.log("restaurant Info: " , restaurantInfo)
    const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating } = restaurantInfo?.cards[2]?.card?.card?.info
    const { itemCards } = restaurantInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage} </p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map(x=> <li key={x?.info?.id  || x?.card?.info?.id } >{x.card.info.name} </li> )
                }

            </ul>
        </div>
    )
}

export default RestaurantMenu;