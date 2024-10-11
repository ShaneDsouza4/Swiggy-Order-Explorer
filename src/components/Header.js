import { LOGO_URL } from "../../utils/contants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlinStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  useEffect(() => {
    //console.log("useEffect called.");
  });

  // Subscribing to the redux store using a selector
  const cartItems = useSelector((store) => store.cart?.items);
  console.log("cartItems: ", cartItems);

  return (
    <div className="flex justify-between bg-green-50 shadow-lg sm:bg-yellow-200">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">
              Cart - ({cartItems ? cartItems.length : 0} items)
            </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">
            <b>{loggedInUser}</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
