import { CDN_URL } from "../../utils/contants";

const RestaturantCard = (props) => {
  const { resData } = props;

  const { id, name, cuisines, avgRating, cloudinaryImageId } = resData?.info;

  const { slaString } = resData?.info?.sla;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-[#f0f0f0] hover:bg-red-100">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaturantCard;
