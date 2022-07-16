import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="img-box">
        <img
          // src={require("../images/img1.png")}
          src={require(`../images/${props.img}`)}
          alt="player image"
          className="card-img"
        />
      </div>
      <div className="card-stats">
        <img src={require("../images/star.png")} className="card-star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) * </span>
        <span className="gray">{props.country}</span>
      </div>
      <p className="card-details">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
