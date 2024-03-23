import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import Booking from "../pages/booking/Booking";
import AboutUs from "../pages/aboutUs/AboutUs";
import Visa from "../pages/visa/Visa";
import NotFoundPage from "../pages/NotFoundPage";
import AddProduct from "../components/product/AddProduct";
import EditPage from "../pages/EditPage";
import Tour from "../pages/tour/Tour";
import Register from "../components/authentication/Register";
import LogIn from "../components/authentication/LogIn";
import { useAuthContext } from "../context/AuthContext";
import { ADMIN } from "../helpers/const";

const MainRoutes = () => {
  const { user } = useAuthContext();
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/tour", element: <Tour /> },
    { id: 3, link: "/visa", element: <Visa /> },
    { id: 4, link: "/about", element: <AboutUs /> },
    { id: 5, link: "/booking", element: <Booking /> },
    { id: 6, link: "*", element: <NotFoundPage /> },
    { id: 7, link: "/register", element: <Register /> },
    { id: 8, link: "/login", element: <LogIn /> },
  ];
  const PRIVATE_ROUTES = [
    { id: 7, link: "/edit/:id", element: <EditPage /> },
    { id: 8, link: "/addProduct", element: <AddProduct /> },
  ];

  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route path={elem.link} key={elem.id} element={elem.element} />
        ))}
        {user
          ? PRIVATE_ROUTES.map((elem) => (
              <Route
                key={elem.id}
                path={elem.link}
                element={
                  user.email === ADMIN ? elem.element : <Navigate to="*" />
                }
              />
            ))
          : null}
      </Routes>
    </div>
  );
};

export default MainRoutes;
