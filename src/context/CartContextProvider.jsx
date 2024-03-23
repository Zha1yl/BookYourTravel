import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/const";
import {
  calcSubPrice,
  calcTotalPrice,
  getLocalStorage,
} from "../helpers/functions";
const cartContext = createContext();
export const useCart = () => useContext(cartContext);
const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // !GET
  const getCart = () => {
    let cart = getLocalStorage();
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          tours: [],
          totalPrice: 0,
        })
      );
      cart = {
        tours: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };
  // !CREATE
  const addToursToCart = (tour) => {
    let cart = getLocalStorage();
    if (!cart) {
      cart = {
        tours: [],
        totalPrice: 0,
      };
    }
    let newTour = {
      item: tour,
      count: 1,
      subPrice: tour.price,
    };
    let tourToFind = cart.tours.filter((elem) => elem.item.id === tour.id);
    if (tourToFind.length === 0) {
      cart.tours.push(newTour);
    } else {
      cart.tours = cart.tours.filter((elem) => elem.item.id !== tour.id);
    }
    cart.totalPrice = calcTotalPrice(cart.tours);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };
  // ! проверка на наличие тура в бронировании
  const checkTourInCart = (id) => {
    let cart = getLocalStorage();
    if (cart && cart.tours) {
      let newCart = cart.tours.filter((elem) => elem.item.id == id);
      return newCart.length > 0 ? true : false;
    }
  };
  // ! изменение стоимости за один тур
  const changeTourCount = (id, count) => {
    let cart = getLocalStorage();
    cart.tours = cart.tours.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.tours);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };
  // !DELETE
  const deleteTourFromCart = (id) => {
    let cart = getLocalStorage();
    cart.tours = cart.tours.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.tours);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const values = {
    addToursToCart,
    getCart,
    checkTourInCart,
    changeTourCount,
    deleteTourFromCart,
    cart: state.cart,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
