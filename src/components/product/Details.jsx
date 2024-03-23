import React from "react";
import { useCart } from "../../context/CartContextProvider";
import { Button } from "@mui/material";

const Details = ({ elem, handleClose }) => {
  const { checkTourInCart, addToursToCart } = useCart();
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <img src={elem.image} alt={elem.place} />
        <p>{elem.place}</p>
        <p>{elem.date}</p>
        <p>{elem.days}</p>
        <p>{elem.price}$</p>
        <div style={{ marginTop: "auto" }}>
          {checkTourInCart(elem.id) ? (
            <Button>Already booked</Button>
          ) : (
            <Button onClick={() => addToursToCart(elem)}>
              Buy for {elem.price}$
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
