import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS, API } from "../helpers/const";
import axios from "axios";

export const tripContext = createContext();
export const useTrip = () => useContext(tripContext);
const INIT_STATE = {
  products: [],
  oneTour: {},
};
const BookTripContext = ({ children }) => {
  const navigate = useNavigate();
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTIONS.GET_PRODUCTS:
        return { ...state, products: action.payload };
      case ACTIONS.GET_ONE_TOUR:
        return { ...state, oneTour: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // !CREATE
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    navigate("/tour");
  };
  // !GET
  const getTours = async () => {
    const { data } = await axios(API);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };
  // ! DELETE
  const deleteTour = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTours();
  };
  // !GET_ONE_TOUR
  const getOneTour = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_ONE_TOUR,
      payload: data,
    });
  };
  // !EDIT
  const editTour = async (id, editedTour) => {
    await axios.patch(`${API}/${id}`, editedTour);
    navigate("/tour");
  };
  const values = {
    addProduct,
    getTours,
    products: state.products,
    deleteTour,
    getOneTour,
    oneTour: state.oneTour,
    editTour,
  };
  return <tripContext.Provider value={values}>{children}</tripContext.Provider>;
};

export default BookTripContext;
