import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../fireBase";
import { ACTIONS } from "../helpers/const";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHECK_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  //! функция проверяющая авторизован пользователь или нет
  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: ACTIONS.CHECK_USER,
        payload: user,
      });
    });
  };

  useEffect(() => {
    checkUser();
  }, []);
  //! функция - регистрация через google
  const authWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };
  //! функция - регистрация через email и password
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //! функция login
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //! функция для logOut
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const values = { authWithGoogle, register, user: state.user, logIn, logOut };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
