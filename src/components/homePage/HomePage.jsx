import React from "react";
import "./home.css";
import Header from "../header/Header";
import Category from "../category/Category";
import TopSelling from "../topSelling/TopSelling";
import NextTrip from "../nextTrip/NextTrip";
import AboutUs from "../aboutUs/AboutUs";
import Subscribe from "../subscribe/Subscribe";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Category />
      <TopSelling />
      <NextTrip />
      <AboutUs />
      <Subscribe />
    </div>
  );
};

export default HomePage;
