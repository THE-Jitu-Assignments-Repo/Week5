import React from "react";
import "./newproduct.css";
import { FaClipboardCheck, FaShoppingCart, FaTools } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function NewProduct({ setModal, data, setData }) {
  const [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    setNewProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(newProduct);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "https://fakestoreapi.com/products",
      newProduct
    );
    setModal(false);

    setData([res.data, ...data]);

    toast.success("New Product Added Successfully!");
  };

  console.log(data);

  return (
    <div className="modal">
      <div className="modal--container">
        <form className="modal-form" onSubmit={handleSubmit}>
          <p className="head--modal">
            <FaClipboardCheck /> <span>ADD A NEW PRODUCT</span>
          </p>{" "}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter the Title..."
            autoFocus
            value={newProduct.title}
            onChange={handleChange}
            required
          />
          <label htmlFor="image">Image</label>
          <input
            type="url"
            name="image"
            placeholder="Enter the product url..."
            value={newProduct.image}
            onChange={handleChange}
            required
          />
          <label htmlFor="category">Category</label>
          <select
            name="category"
            value={newProduct.category}
            onChange={handleChange}
            required
          >
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
          </select>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter the Price..."
            value={newProduct.price}
            onChange={handleChange}
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            placeholder="Write the Description...."
            cols="10"
            rows="5"
            value={newProduct.description}
            onChange={handleChange}
            required
          ></textarea>
          <div className="btn">
            <button type="submit">
              <FaShoppingCart /> Add
            </button>
            <button type="cancle" onClick={() => setModal(false)}>
              <FaTools />
              cancle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
