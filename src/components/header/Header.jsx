import React from "react";
import "./header.css";
import MainImg from "../../images/Traveller 1.png";
import videoLogo from "../../images/Play button.svg";

const Header = () => {
  return (
    <div>
      <div className="mainContentWrapper">
        <div className="headerLeft">
          <div className="headerLeftUp">
            <span>Best Destinations around the world</span>
            <p className="headerMainText">
              Travel, enjoy and live a new and full life
            </p>
            <p className="headerText">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
          </div>
          <div className="headerLeftDown">
            <div className="headerLeftDownBtn1">Find out more</div>
            <img src={videoLogo} alt="" />
            <div className="headerLeftDownBtn2">Play Demo</div>
          </div>
        </div>
        <div className="headerRight">
          <div className="headerRightImg">
            <img src={MainImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
