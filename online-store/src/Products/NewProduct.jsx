import React from "react";
import "./newproduct.css";
import {FaClipboardCheck, FaShoppingCart, FaTools} from 'react-icons/fa'





function NewProduct({ setModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="modal">
    
      <div className="modal--container">
        <form className="modal-form" onSubmit={(e) => handleSubmit(e)}>
          <p><FaClipboardCheck /> ADD A NEW PRODUCT</p>
          <label htmlFor="image">Image</label>

          <input
            type="text"
            name="image"
            placeholder="Enter the product url..."
            a
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter the Title..."
            autoFocus
          />
          <label htmlFor="category">Category</label>

          <input
            type="text"
            name="category"
            placeholder="Enter the Category..."
            a
          />
          <label htmlFor="price">Price</label>

          <input type="text" name="price" placeholder="Enter the Price..." a />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            placeholder="Write the Description...."
            cols="10"
            rows="5"
          ></textarea>
          <div className="btn">
            <button type="submit"><FaShoppingCart /> Add</button>
            <button type="cancle" onClick={() => setModal(false)}>
              <FaTools />cancle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
