import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

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
                <Link to="/cart">Cart</Link>
              </li>
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
