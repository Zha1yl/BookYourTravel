import React from "react";
import "./aboutUs.css";
import three from "../../images/threePoint.svg";
import logos from "../../images/logos.png";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutUsWrapper">
        <div className="leftBlock">
          <p>TESTIMONIALS</p>
          <h2>What people say about Us.</h2>
          <img src={three} alt="" />
        </div>
        <div className="rightBlock">
          <div className="rightBlock1">
            <span>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </span>
            <p>Mike taylor</p>
            <span>Lahore, Pakistan</span>
          </div>
          <div className="rightBlock2">
            <p>Chris Thomas</p>
            <span>CEO of Red Button</span>
          </div>
        </div>
      </div>
        <div className="aboutUsLogos">
          <img src={logos} alt="" />
        </div>
    </div>
  );
};

export default AboutUs;
