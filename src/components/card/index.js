import React from "react";
import flag from "../../assets/img/memoryIcon.png";
import "./style.css";

const images = require.context("../../assets/img", true);
const loadImage = (imageName) => images(`./${imageName}`).default;

const Card = ({
  handleClick,
  id,
  type,
  flipped,
  solved,
  height,
  width,
  disabled,
}) => {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      style={{ width, height }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className="flipper">
        <img
          style={{ width, height }}
          className={flipped ? "front" : "back"}
          src={flipped || solved ? loadImage(`${type}.png`) : flag}
          alt=""
        />
      </div>
    </div>
  );
};
export default Card;
