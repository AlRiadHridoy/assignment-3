import React from "react";
import { useSelector } from "react-redux";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";

const Home = () => {
  // const products = useSelector((state) => state.products);
  return (
    <main className="py-16">
      <div className="productWrapper">
        {32> 0 ? (
          <ProductList />
        ) : (
          <div className="product-alert">
            <p>No Product your application.Please add new product</p>
          </div>
        )}
        <AddProduct />
      </div>
    </main>
  );
};

export default Home;
