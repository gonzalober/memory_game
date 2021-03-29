import React from "react";
import "./style.css";

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
          src={flipped || solved ? `/img/${type}.png` : `/img/flags_back.png`}
        />
      </div>
    </div>
  );
};
export default Card;
