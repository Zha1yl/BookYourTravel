import React from "react";
import "./tour.css";
import ProductList from "../../components/product/ProductList";


const Tour = () => {
  return (
    <div className="tour">
      <h1>Tours from JADOO</h1>
      <div className="tourCard">
        <ProductList />
      </div>
    </div>
  );
};

export default Tour;
