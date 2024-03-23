import React from "react";
import "./nextTrip.css";
import greece from "../../images/greeece.avif"

const NextTrip = () => {
  return (
    <div>
      <div className="tripBlocks">
        <div className="tripBlockLeft">
          <div className="mainText">
            <p>Easy and Fast</p>
            <h2>Book your next trip in 3 easy steps</h2>
          </div>
          <div className="textWithIcon">
            <div className="icon1">
              <p>Choose Destination</p>
            </div>
            <div className="icon2">
              <p>Make Payment</p>
            </div>
            <div className="icon3">
              <p>Reach Airport on Selected Date</p>
            </div>
          </div>
        </div>
        <div className="tripBlockRight">
          <div className="tripCard">
            <img src={greece} alt="" />
            <span>Trip To Greece</span>
            <span>14-29 June</span>
            <p>24 people going</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextTrip;
