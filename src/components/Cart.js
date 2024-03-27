import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto px-3">
      <button className="btn btn-primary" onClick={handleClearCart}>
        CLear Cart
      </button>
      <div className="w-full max-w-[50rem] mx-auto my-8">
        {cartItems == 0 && <p>empty cart</p>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
