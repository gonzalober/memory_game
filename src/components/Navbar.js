import React from "react";
import "./../App.css";

const Navbar = ({ name }) => {
  return (
    <div className="navbar">
      <div className="game-title">
        <h3>Memory Game - Flags of the World!</h3>
      </div>
      <div>
        <h2>{name.name}</h2>
      </div>
    </div>
  );
};

export default Navbar;
