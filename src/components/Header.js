import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="container">
        <div className="header_wrap">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/grocery">Grocery</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>status: {onlineStatus ? "on" : "off"} </li>
              <button
                className="login"
                onClick={() => {
                  btnName === "login"
                    ? setBtnName("logout")
                    : setBtnName("login");
                }}
              >
                {btnName}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
