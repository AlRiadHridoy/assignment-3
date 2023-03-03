import React from "react";
import BillDetails from "../components/BillDetails";
import CartList from "../components/CartList";

const Cart = () => {
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div>
            <CartList />
          </div>

          <div>
            <BillDetails />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
