import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export default RestaurantMenu = () => {
    //const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    // useEffect(()=>{
    //   fetchMenu()
    // }, [])

    // const fetchMenu = async () => {
    //     const data = await fetch(
    //         MENU_URL + resId
    //     )

    //     const json = await data.json();

    //     console.log(json)
    //     setResInfo(json.data);
    // }
   if(resInfo === null){
    return <Shimmer/>
   }
   const {name, cuisines, costForTwoMessage, cloudinaryImageId} = resInfo?.cards[0]?.card?.card?.info;
   const {itemCards} = 
   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
        <div className="menu">
          <h1>{name}</h1>
          <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
          <h3>Menu</h3>
          <ul>
            {itemCards.map((item)=>{
                return(
                    <li key={item.card.info.id}>{item.card.info.name}-{" "}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                )
            })}
            
          </ul>
        </div>
    )
}