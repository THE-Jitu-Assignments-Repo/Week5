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
      [e.target.name]: e.target.value
    }))

  };

  console.log(newProduct);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("https://fakestoreapi.com/products", newProduct);
    setModal(false)
    
    setData([res.data, ...data])

    toast.success("New Product Added Successfully!")
  };

  console.log(data);

  return (
    <div className="modal">
      <div className="modal--container">
        <form className="modal-form" onSubmit={handleSubmit}>
          <p>
            <FaClipboardCheck /> ADD A NEW PRODUCT
          </p>
          <label htmlFor="image">Image</label>

          <input
            type="text"
            name="image"
            placeholder="Enter the product url..."
            value={newProduct.image}
            onChange={handleChange}
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter the Title..."
            autoFocus
            value={newProduct.title}
            onChange={handleChange}
          />
          <label htmlFor="category">Category</label>

          <input
            type="text"
            name="category"
            placeholder="Enter the Category..."
            value={newProduct.category}
            onChange={handleChange}
          />
          <label htmlFor="price">Price</label>

          <input
            type="number"
            name="price"
            placeholder="Enter the Price..."
            value={newProduct.price}
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            placeholder="Write the Description...."
            cols="10"
            rows="5"
            value={newProduct.description}
            onChange={handleChange}
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
