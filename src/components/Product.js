import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, billAmount } from "../redux/add-product/action";

const Product = ({ product }) => {
  const { productName, url: productUrl, price, stock, category } = product;

  const dispatch = useDispatch();
  const handelAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(billAmount())

  };
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={productUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productName}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{stock}</span>
          </p>
        </div>
        <button className="lws-btnAddToCart" onClick={handelAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
