import React, { useEffect } from "react";
import { useTrip } from "../../context/BookTripContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getTours, products } = useTrip();
  useEffect(() => {
    getTours();
  }, []);
  console.log(products)
  return (
    <div className="productList">
      {products.map((elem) => (
        <ProductCard key={elem.id} elem={elem} />
      ))}
    </div>
  );
};

export default ProductList;
