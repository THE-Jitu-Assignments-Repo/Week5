import React from "react";
import "./layout.css";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaStore } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { BsListNested } from "react-icons/bs";
import { useState } from "react";
import { useContext } from "react";
import { CategoryContext } from "../../App";

const Layout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [ data ] = useFetch("https://fakestoreapi.com/products/categories");

  const [, setSelectedCategory] = useContext(CategoryContext);


  const navigate = useNavigate();
  return (
    <div className="layout--container">
      <div className="layout--main">
        {showSideBar && (
          <div className="layout--sidebar">
            <div className="sidebar--header">
              <h3 className="name--head"> <FaStore />  Online-Store</h3>
              <div className="sidebar-navs">
                <div className="sidebar-pages">
                  <p>Pages</p>
                </div>
                <div className="sidebar--item" onClick={() => navigate("/")}>
                  <FaHome /> Home
                </div>
                <div
                  className="sidebar--item"
                  onClick={() => {
                    navigate("/products");
                    setSelectedCategory("");
                  }}
                >
                  <MdOutlineProductionQuantityLimits /> Products
                </div>
                <div
                  className="sidebar--item Category"
                  onClick={() => navigate("/products")}
                >
                  <BiCategoryAlt /> Categories
                  <div className="drop-down-categories">
                    {data?.map((item) => (
                      <a onClick={() => setSelectedCategory(item)}>{item}</a>
                    ))}
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        )}

        <div className="layout--content">
          {" "}
          <div className="layout--header">
            {" "}
            <span
              className="humburger"
              onClick={() => setShowSideBar(!showSideBar)}
            >
              <BsListNested />
            </span>
            <div className="profile">
              <FaUser />
              <h4>Michael Kamau</h4>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
