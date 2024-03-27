import { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
                <Link to="/cart" className="flex items-center">
                  <i className="fa-solid fa-cart-shopping text-xl"></i>{" "}
                  <span className="bg-black text-white text-xs rounded-full w-[18px] h-[18px] inline-flex items-center justify-center relative -top-2">
                    {cartItems.length}
                  </span>
                </Link>
              </li>
              <li className="p-2.5">status: {onlineStatus ? "on" : "off"} </li>
              <li className="p-2.5 font-medium">{loggedInUser}</li>
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
