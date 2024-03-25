import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="bg-primary-light">
      <div className="container mx-auto px-3">
        <div className="flex flex-wrap py-4 justify-between items-center">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="max-w-[160px]" />
            </Link>
          </div>
          <div>
            <ul className="flex flex-wrap">
              <li className="p-2.5">
                <Link to="/">Home</Link>
              </li>
              <li className="p-2.5">
                <Link to="/about">About</Link>
              </li>
              <li className="p-2.5">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="p-2.5">
                <Link to="/grocery">Grocery</Link>
              </li>
              <li className="p-2.5">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="p-2.5">status: {onlineStatus ? "on" : "off"} </li>
              <button
                className="btn btn-primary"
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
