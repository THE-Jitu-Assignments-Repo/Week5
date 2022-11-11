import React from "react";

function ProductCard({ handleDelete, filteredData }) {
  return (
    <>
      {filteredData?.map((product) => {
        return (
          <div className="product--card" key={product.id}>
            <div className="product--image">
              <img src={product.image} alt="image" width={60} />
            </div>
            <div className="product--details">
              <h4>
                <span className="title">{product?.title}</span>
              </h4>
              <h4>
               <span className="category--name">{product?.category}</span>
              </h4>
              <h4>
                Description: <span className="description--tag">{product?.description}</span>
              </h4>
            </div>

            <div className="product--rates">
              <div className="price">
                <span>Price: Ksh.{product?.price}</span>
              </div>{" "}
              <div className="ratings">
                {/* <ReactStars /> */}
                <span>Ratings: {product.rating?.rate} </span>
              </div>
              <button
                onClick={() => handleDelete(product.id)}
                className="Delete"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;
