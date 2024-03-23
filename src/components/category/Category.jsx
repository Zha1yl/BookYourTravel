import React from "react";
import "./catefgory.css"
import weather from "../../images/WeatherLogo.svg";
import plain from "../../images/airplane.svg";
import microphon from "../../images/microphon.png";
import setting from "../../images/settingLogo.svg";

const Category = () => {
  return (
    <div>
      <div className="categoryWrapper">
        <div className="category">
          <p>CATEGORY</p>
          <h2>We Offer Best Services</h2>
        </div>
        <div className="categoryCards">
          <div className="categoryCard">
            <img src={weather} alt="" />
            <p>Calculated Weather </p>
            <span>
              Built Wicket longer admire do barton vanity itself do in it.
            </span>
          </div>
          <div className="categoryCard">
            <img src={plain} alt="" className="plane" />
            <p>Best Flights </p>
            <span>
              Engrossed listening. Park gate sell they west hard for the.
            </span>
          </div>
          <div className="categoryCard">
            <img src={microphon} alt="" className="microphon" />
            <p>Local Events</p>
            <span>
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </span>
          </div>
          <div className="categoryCard">
            <img src={setting} alt="" className="setting" />
            <p>Customization</p>
            <span>
              We deliver outsourced aviation services for military customers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
