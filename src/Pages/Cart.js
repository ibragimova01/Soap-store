import React from "react";
import CartIndex from "../Components/cart/index";
import { useSelector } from "react-redux";

function Cart() {
  const shoppingCart = useSelector((state) => state.shoppingCart);

  return <CartIndex shoppingCart={shoppingCart} />;
}

export default Cart;
