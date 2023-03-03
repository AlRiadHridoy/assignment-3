import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const carts = useSelector((state) => state.carts);
  return (
    <>
      {carts?.map((cart, index) => (
        <CartItem key={index} cart={cart} />
      ))}
    </>
  );
};

export default CartList;
