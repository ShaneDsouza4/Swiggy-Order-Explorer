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
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
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
