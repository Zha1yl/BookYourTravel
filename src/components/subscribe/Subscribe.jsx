import React from "react";
import "./subscribe.css";

const Subscribe = () => {
  return (
    <div className="subCard">
      <p>
        Subscribe to get information, latest news and other interesting offers
        about our company
      </p>
      <input type="email" placeholder="Your email" />
      <button>Subscribe</button>
    </div>
  );
};

export default Subscribe;
