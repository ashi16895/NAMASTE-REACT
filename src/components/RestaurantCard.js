import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString, sla } =
    resData?.info;
  const { slaString } = sla;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        style={{width: "100%"}}
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>
        
        {cuisines.join(", ")}
      </h4>
      <h4>{avgRatingString + "stars"}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
