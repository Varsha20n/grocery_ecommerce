
import React from "react";
import "./aboutSection.css";
import { Typography } from "@material-ui/core";

const About = () => {
  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div className="aboutContent">
          <div className="aboutCard">
            <Typography component="h2">Welcome to Grocery Mart</Typography>
            <span>
              Grocery Mart is your trusted online grocery store, bringing fresh produce, pantry staples, and household essentials right to your doorstep. We make shopping for groceries easy, convenient, and affordable.
            </span>
          </div>

          <div className="aboutCard">
            <Typography component="h2">What We Offer</Typography>
            <div className="featuresList">
              <div className="featureItem">
                <span className="featureIcon">🥬</span>
                <span>Fresh Fruits & Vegetables</span>
              </div>
              <div className="featureItem">
                <span className="featureIcon">🥛</span>
                <span>Dairy & Bakery Products</span>
              </div>
              <div className="featureItem">
                <span className="featureIcon">🍚</span>
                <span>Staples & Grains</span>
              </div>
              <div className="featureItem">
                <span className="featureIcon">🧴</span>
                <span>Personal Care & Household</span>
              </div>
              <div className="featureItem">
                <span className="featureIcon">🚚</span>
                <span>Fast Home Delivery</span>
              </div>
            </div>
          </div>

          <div className="aboutCard">
            <Typography component="h2">Why Shop With Us?</Typography>
            <span>
              We source our products directly from trusted farmers and suppliers to ensure you get the freshest items every time. With competitive prices, easy returns, and reliable delivery, Grocery Mart is the smart choice for all your grocery needs.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
