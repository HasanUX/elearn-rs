import React from "react";
import HeroBanner from "../img/hero-banner-1.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__banner">
        <img src={HeroBanner} alt="hero-banner" className="hero__bannerImg" />
      </div>
    </div>
  );
}

export default Hero;
