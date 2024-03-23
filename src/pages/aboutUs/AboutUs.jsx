import React from "react";
import "./aboutUs.css";
import image from "../../images/traveling-concept-with-landmarks_23-2149153261.avif";

const AboutUs = () => {
  return (
    <div className="aboutWrapper">
      <div className="aboutHeader">
        <div className="aboutHeaderContent">
          <h2>What is it JADOO ?</h2>
        </div>
        <div className="aboutHeaderContentDown">
          <p>
            JADOO — this is an online service that collects the best vacation
            deals for any budget from leading tour operators. On JADOO you will
            find hotels in the most popular resorts, tours with and without
            excursions, to the sea, mountains or to top capitals with rich
            culture.
          </p>
          <img src={image} alt="" />
        </div>
      </div>
      <div className="aboutContent">
        <div className="aboutContentUp">
          <h2>Why are we better than other online services?</h2>
          <p>
            Our main advantage is an individual approach to each traveler and
            the accompaniment of the entire holiday for maximum comfort.
          </p>
        </div>
        <div className="aboutContentDown">
          <div className="ulUp">
            <ul>
              <li>User-friendly interface</li>
              <li>Gifts and discounts from partners</li>
              <li>24/7 support in messengers during the entire trip</li>
            </ul>
          </div>
          <div className="ulDown">
            <ul>
              <li>Cashback for trips</li>
              <li>Promo codes for the services of entertainment venues</li>
              <li>
                Individual services such as airport and hotel transfers, travel
                insurance, additional baggage, fare upgrade to business class
                and others
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
