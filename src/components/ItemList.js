import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/contants";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items, dummyData }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch Action to go in cart
    dispatch(addItem(item)); //action payload
  };

  //console.log("//>", items);
  return (
    <div>
      {items.map((x) => (
        <div
          key={x.card.info.id}
          className="p-2 m-2 border-b-2 border-black text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              {/* <span>{dummyData}</span> */}
              <span>{x.card.info.name}</span>
              <span> ${x.card.info.price / 100}</span>
            </div>

            <div>
              <p className="text-xs ">{x.card.info.description}</p>
            </div>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 m-auto rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(x)}
              >
                Add +
              </button>
            </div>

            <img src={CDN_URL + x?.card?.info?.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
