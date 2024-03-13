import { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <div className="header">
      <div className="container">
        <div className="header_wrap">
          <div className="logo">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Cart</li>

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
