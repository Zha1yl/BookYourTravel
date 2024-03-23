import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTrip } from "../../context/BookTripContext";
import { Button } from "@mui/material";

const EditProducts = () => {
  const { id } = useParams();
  const { getOneTour, editTour, oneTour } = useTrip();
  console.log(oneTour);
  const [tour, setTour] = useState({
    image: "",
    place: "",
    date: "",
    days: 0,
    price: 0,
  });
  const handleInput = (e) => {
    if (e.target.name === "price" && e.target.name === "days") {
      const obj = { ...tour, [e.target.name]: Number(e.target.value) };
      setTour(obj);
    } else {
      const obj = { ...tour, [e.target.name]: e.target.value };
      setTour(obj);
    }
  };
  const handleClick = () => {
    editTour(id, tour);
  };
  useEffect(() => {
    getOneTour(id);
  }, []);
  useEffect(() => {
    if (oneTour) {
      setTour(oneTour);
    }
  }, [oneTour]);
  return (
    <div className="edit">
      <input
        value={tour.image}
        onChange={handleInput}
        type="text"
        name="image"
        placeholder="image"
      />
      <input
        value={tour.place}
        onChange={handleInput}
        type="text"
        name="place"
        placeholder="place"
      />
      <input
        value={tour.date}
        onChange={handleInput}
        type="text"
        name="date"
        placeholder="date"
      />
      <input
        value={tour.days}
        onChange={handleInput}
        type="text"
        name="days"
        placeholder="days"
      />
      <input
        value={tour.price}
        onChange={handleInput}
        type="text"
        name="price"
        placeholder="price"
      />
      <Button onClick={handleClick}>SAVE</Button>
    </div>
  );
};

export default EditProducts;
