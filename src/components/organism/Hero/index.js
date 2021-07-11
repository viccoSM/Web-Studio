import React from "react";
import { Button } from "../../atom";
import { Header, Slider } from "../../molekul";

const Hero = (props) => {
  return (
    <div className="hero">
      <Header />
      <div className="container">
        <div className="hero-content row">
          <div className="text ms-2 col-md-6">
            <h1>
              Creative Concept <br /> For the Best Service
            </h1>
            <Button type="button" className="btn" isPrimary>
              Lets Work With Us
            </Button>
          </div>
          <div className="slider col-md-6">
            <Slider data={props.data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
