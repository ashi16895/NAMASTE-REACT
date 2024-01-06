import {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/mockData";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resObj);
  return (
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn" 
        onClick={()=>{
            const filteredList = listOfRestaurants.filter(
                (res)=> res.info.avgRatingString > 4.2
            )
            setListOfRestaurants(filteredList)
        }}
        >Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
