import React from "react";
import HeroBanner from "../img/hero-banner-1.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__banner">
        <div className="hero__title">
          <h1 className="hero__headTitle">Learn with Rasuta</h1>
          <h5 className="hero__subTitle">Get customized experience</h5>
        </div>
        <img src={HeroBanner} alt="hero-banner" className="hero__bannerImg" />
      </div>
    </div>
  );
}

export default Hero;
