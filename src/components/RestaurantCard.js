import { CDN_URL } from "../../utils/contants";

const RestaturantCard = (props) => {
  const { resData } = props;
  //console.log("-->", resData?.info);

  const { id, name, cuisines, avgRating, cloudinaryImageId } = resData?.info;

  const { slaString } = resData?.info?.sla;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-[#f0f0f0] hover:bg-red-100"
    >
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

//Higher order function
export const withPromotedLabel = (RestaturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Open
        </label>
        <RestaturantCard {...props} />
      </div>
    );
  };
};

export default RestaturantCard;
