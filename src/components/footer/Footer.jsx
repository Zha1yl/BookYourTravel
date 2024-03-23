import React from "react";
import "./footer.css";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import googlePaly from "../../images/Google Play.svg";
import appStore from "../../images/Play Store.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerBlocks">
        <div className="block1">
          <h2>Jadoo.</h2>
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className="block2">
          <h4>Company</h4>
          <span>About</span>
          <span>Careers</span>
          <span>Mobile</span>
        </div>
        <div className="block3">
          <h4>Contact</h4>
          <span>Help/FAQ</span>
          <span>Press</span>
          <span>Affilates</span>
        </div>
        <div className="block4">
          <h4>More</h4>
          <span>Airlinefees</span>
          <span>Airline</span>
          <span>Low fare tips</span>
        </div>
        <div className="block5">
          <div className="block5Up">
            <img src={facebook} alt="" />

            <img src={twitter} alt="" />
          </div>
          <span>Discover our app</span>
          <div className="block5Down">
            <img src={googlePaly} alt="" />
            <img src={appStore} alt="" />
          </div>
        </div>
      </div>
      <div className="footerDown">
        <p>All rights reserved@jadoo.com</p>
      </div>
    </div>
  );
};

export default Footer;
