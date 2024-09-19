import { CDN_URL } from "../../utils/contants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaturantCard = (props) => {
  const { resData } = props;

  const { id, name, cuisines, avgRating, cloudinaryImageId } = resData?.info;

  const { slaString } = resData?.info?.sla;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaturantCard;
