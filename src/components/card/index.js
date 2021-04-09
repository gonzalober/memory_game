import React from "react";
import flag from "../../assets/img/memoryIcon.png";
import "./../../App.css";

const images = require.context("../../assets/img", true);
const loadImage = (imageName) => images(`./${imageName}`).default;

const Card = ({ handleClick, id, type, flipped, solved, disabled }) => {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className="flipper">
        <img src={flipped || solved ? loadImage(`${type}.png`) : flag} alt="" />
      </div>
    </div>
  );
};
export default Card;
