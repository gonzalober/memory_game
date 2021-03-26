import React from "react";
import "./style.css";
//import type from "../public/img";

const Card = ({ handleClick, id, type, flipped, height, width }) => {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      style={{ width, height }}
      onClick={() => handleClick(id)}
    >
      <div className="flipper">
        <img
          style={{ height, width }}
          className={flipped ? "front" : "back"}
          src={flipped ? `/img/${type}.png` : `/img/flags_back.png`}
        />
      </div>
    </div>
  );
};
export default Card;
