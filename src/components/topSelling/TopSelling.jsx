import React from "react";
import "./TopSelling.css";
import rome from "../../images/Рим.jpg"
import london from "../../images/London-1.jpg"
import europe from "../../images/europe.webp"

const TopSelling = () => {
  return (
    <div>
      <div className="sellingWrap">
        <div className="sellHead">
          <p>Top Selling</p>
          <h2>Top Destinations</h2>
        </div>
        <div className="sellCard">
          <div className="firstCard">
            <img src={rome} alt="" />
            <p>Rome, Italy </p>
            <span>10 Days Trip</span>
            <span>$5.42k</span>
          </div>
          <div className="secondCard">
            <img src={london} alt="" />
            <p>London, UK</p>
            <span>12 Days Trip</span>
            <span>$4.2k</span>
          </div>
          <div className="thirdCard">
            <img src={europe} alt="" />
            <p>Full Europe</p>
            <span>28 Days Trip</span>
            <span>$15k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
