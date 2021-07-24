import React from "react";
import { AboutUs, Hero } from "../organism";
import landingPage from "../../json/LandingPage.json";
import { Package } from "../molekul";

const LandingPages = () => {
  return (
    <>
      <Hero data={landingPage.hero} />
      <AboutUs />
    </>
  );
};

export default LandingPages;
