import React from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { billAmount, deleteToCart } from "../redux/add-product/action";
import { togleCartQty } from "../redux/add-product/action";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();
  const { id, productName, url, price, totalPrice, category, quantity } = cart;

  const handelDelete = () => {
    dispatch(deleteToCart(id));
    dispatch(billAmount());
  };

  const toggle = (id, type) => {
    dispatch(togleCartQty({ id, type }));
    dispatch(billAmount());
  };

  return (
    <div className="space-y-6">
      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          <img className="lws-cartImage" src={url} alt="product" />

          <div className="space-y-2">
            <h4 className="lws-cartName">{productName}</h4>
            <p className="lws-cartCategory">{category}</p>
            <p>
              BDT <span className="lws-cartPrice">{price}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          <div className="flex items-center space-x-4">
            <button
              className="lws-incrementQuantity"
              onClick={() => toggle(id, "DEC")}
            >
              <AiOutlineMinus />
            </button>
            <span className="lws-cartQuantity">{quantity}</span>
            <button
              className="lws-decrementQuantity"
              onClick={() => toggle(id, "INC")}
            >
              <AiOutlinePlus />
            </button>
          </div>

          <p className="text-lg font-bold">
            BDT <span className="lws-calculatedPrice">{totalPrice}</span>
          </p>
        </div>

        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button
            className="lws-removeFromCart"
            onClick={handelDelete}
          >
            <AiOutlineDelete size={30} className="text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
