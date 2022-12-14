import React, { useState, useContext, useMemo } from "react";
import ProductCard from "../Products/ProductCard";
import "./product.css";
import { CategoryContext } from "../App";
import { FaPlus } from "react-icons/fa";
import NewProduct from "../Products/NewProduct";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { toast } from "react-toastify";
import axios from "axios";

const AddProducts = () => {
  const [data, setData] = useFetch("https://fakestoreapi.com/products/");
  const [descend] = useFetch("https://fakestoreapi.com/products?sort=desc");
  const [ascend] = useFetch("https://fakestoreapi.com/products?sort=asc");

  const [selectedCategory] = useContext(CategoryContext);

  const filterData = () => {
    if (!selectedCategory) return data;
    return data?.filter((item) => item.category === selectedCategory);
  };

  const filteredData = useMemo(filterData, [selectedCategory, data]);

  const handleDelete = (id) => {
    setData(data?.filter((item) => item.id !== id));
    toast.success("Deleted succefully");
  };

  const [limit, setLimit] = useState(0);

  const [modal, setModal] = useState(false);

  const sliceData = () => {
    if (+limit === 5) {
      setData(data?.slice(0, limit));
    } else if (+limit === 10) {
      console.log("tens", limit);
      setData(data?.slice(0, limit));
    } else {
      return setData(data);
    }
  };

  const handleLimit = (e) => {
    setLimit(e.target.value);
  };

  useEffect(() => {
    sliceData();
  }, [limit]);

  const handleSort = (e) => {
    let order = e.target.value;
    if (order === "Desc") {
      setData(descend);
    } else if (order === "Asc") {
      setData(ascend);
    }
  };

  return (
    <div>
      <div className="product--name">
        <div className="products--name--tag">
          {selectedCategory ? (
            <h2>{selectedCategory} </h2>
          ) : (
            <h2>All Products</h2>
          )}
        </div>
        <div className="product--settings">
          {modal && (
            <NewProduct setModal={setModal} data={data} setData={setData} />
          )}
          <button className="add--product" onClick={() => setModal(!modal)}>
            <FaPlus /> Add Product
          </button>

          <div className="sort--product">
            <div className="sort-limit">
              <label htmlFor="">Limit By:</label>
              <select name="limit" onChange={handleLimit}>
                <option value="20">20</option>
                <option value="10">10</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="sort-asc">
              <label htmlFor="">Sort By:</label>
              <select name="sortOrder" onChange={handleSort}>
                <option value="Asc">Asc</option>
                <option value="Desc">Desc</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="product--card--main">
        <ProductCard filteredData={filteredData} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default AddProducts;
