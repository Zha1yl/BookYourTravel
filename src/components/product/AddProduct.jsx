import React, { useState } from "react";
import { useTrip } from "../../context/BookTripContext";

const AddProduct = () => {
  const { addProduct } = useTrip();
  const [product, setProduct] = useState({
    place: "",
    date: "",
    days: 0,
    price: 0,
  });
  const handleInput = (e) => {
    if (e.target.name === "days" && e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    addProduct(product);
  };
  return (
    <div className="addProduct">
      <div className="admin">
        <h1>ADMIN PAGE</h1>
      </div>
      <div className="addInp">
        <input
          onChange={handleInput}
          type="text"
          name="image"
          placeholder="image"
        />
        <input
          onChange={handleInput}
          type="text"
          name="place"
          placeholder="place"
        />
        <input
          onChange={handleInput}
          type="text"
          name="date"
          placeholder="date"
        />
        <input
          onChange={handleInput}
          type="text"
          name="days"
          placeholder="days"
        />
        <input
          onChange={handleInput}
          type="text"
          name="price"
          placeholder="price"
        />
      </div>
      <button onClick={handleClick}>ADD TOUR</button>
    </div>
  );
};

export default AddProduct;
