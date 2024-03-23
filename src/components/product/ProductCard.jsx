import React, { useState } from "react";
import { useTrip } from "../../context/BookTripContext";
import { AddShoppingCart } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Details from "./Details";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContextProvider";
import { useAuthContext } from "../../context/AuthContext";
import { ADMIN } from "../../helpers/const";

const ProductCard = ({ elem }) => {
  const { user } = useAuthContext();
  const { deleteTour } = useTrip();
  const { addToursToCart, checkTourInCart, deleteTourFromCart } = useCart();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = () => {
    deleteTour(elem.id);
    deleteTourFromCart(elem.id);
  };
  return (
    <div className="cardTours">
      <img src={elem.image} alt="" />
      <p>{elem.place}</p>
      <p>{elem.date}</p>
      <p>{elem.days}</p>
      <p>{elem.price}$</p>
      {user.email === ADMIN ? (
        <>
          <Button variant="contained" onClick={handleClick}>
            DELETE
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate(`/edit/${elem.id}`)}
          >
            EDIT
          </Button>
        </>
      ) : (
        <IconButton
          sx={{
            backgroundColor: checkTourInCart(elem.id) ? "black" : "",
            color: checkTourInCart(elem.id) ? "white" : "",
          }}
          onClick={() => addToursToCart(elem)}
        >
          <AddShoppingCart />
        </IconButton>
      )}
      <Button onClick={handleOpen}> DETAILS</Button>
      {open && <Details elem={elem} handleClose={handleClose} />}
    </div>
  );
};

export default ProductCard;
