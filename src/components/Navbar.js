import React from "react";

const Navbar = () => {
  const name = "";
  const score = 0;
  return (
    <div className="navbar">
      <div className="game-title">Memory</div>
      <div className="name">{name}</div>
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default Navbar;
