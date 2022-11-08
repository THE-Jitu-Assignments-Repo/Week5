import React from "react";

function ProductCard({handleDelete, filteredData}) {

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
                Title: <span>{product?.title}</span>
              </h4>
              <h4>
                Category: <span>{product?.category}</span>
              </h4>
              <h4>
                Description: <span>{product?.description}</span>
              </h4>
            </div>

            <div className="product--rates">
              <div className="ratings">
                {/* <ReactStars /> */}
                <span>Ratings: {product.rating?.rate} </span>
              </div>
              <div className="price">
                <span>Price: {product?.price} Ksh.</span>
              </div>{" "}
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