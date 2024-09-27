import { LOGO_URL } from "../../utils/contants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlinStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlinStatus();

  useEffect(() => {
    console.log("useEffect called.");
  });

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
          <button
            className="login"
            onClick={() => {
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
