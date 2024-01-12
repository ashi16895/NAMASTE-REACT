import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString, sla } =
    resData?.info;
  const { slaString } = sla;

  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-pink-50 hover:bg-gray-200"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>
        
        {cuisines.join(", ")}
      </h4>
      <h4>{avgRatingString + "stars"}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

//Higher Order Components
//input - Restaurant card
//output => promoted Restaurant card

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
      
    )
  }

}

export default RestaurantCard;
