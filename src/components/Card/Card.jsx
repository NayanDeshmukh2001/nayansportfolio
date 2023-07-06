import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button"> <a href="https://nayansprogress.netlify.app/" target="_blank" title="nayansprogress" >Learn More</a></button>
    </div>
  );
};

export default Card;
