import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/add-product/action";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const dispatch = useDispatch();
  const products = useSelector((state) => {
    const products = state.products;
    return products;
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: products.length,
      productName,
      category,
      url,
      price,
      stock,
    };
    setCategory("");
    setPrice("");
    setProductName("");
    setStock("");
    setUrl("");
    dispatch(addProduct(product));
  };
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={handelSubmit}
      >
        <div className="space-y-2">
          <label htmlFor="name">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
