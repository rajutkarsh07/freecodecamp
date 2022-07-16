import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <img
        src={require("../images/heroimg.png")}
        alt="hero image"
        className="hero-img"
      />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-para">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </div>
  );
}

// export default main;
