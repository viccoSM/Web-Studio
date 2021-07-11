import React from "react";
import Hero from "../organism/Hero";
import landingPage from "../../json/LandingPage.json";

const LandingPages = () => {
  return (
    <>
      <Hero data={landingPage.hero} />
    </>
  );
};

export default LandingPages;
