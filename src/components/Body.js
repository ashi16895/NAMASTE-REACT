import { useState, useEffect, useContext } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {setUserName, loggedInUser} = useContext(UserContext)

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false)
  return(
    <h1>Looks like you're offline!! Please check your internet connection</h1>
  )

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between">
        <div className="m-2">
          <input
            type="text"
            className="border border-solid border-black h-12 p-2 rounded-sm"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button 
          className="px-4 py-2 bg-green-100 m-4 rounded-md"
          onClick={() => {
            const filteredlist = listOfRestaurants.filter(
              (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            setFilteredRestaurant(filteredlist)
          }
          }
          >Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button
          className="bg-green-100 px-4 py-2 rounded-md"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRatingString > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>Username: </label>
         <input className="border border-black p-2" onChange={(e)=>setUserName(e.target.value)} value={loggedInUser}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant, index) => {
          return (
            <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
              {/* {if restaurant is promoted out a promoted Label} */}
              {restaurant?.info?.isOpen ?
              <RestaurantCardPromoted resData={restaurant}/>
            :<RestaurantCard  resData={restaurant} />}
            </Link>
          );
        })}
      </div>
    </div>
  );
};



export default Body;
