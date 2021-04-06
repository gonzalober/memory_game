import React, { useContext } from "react";
import { UserContext } from "../userContext";

const Navbar = () => {
  const { name } = useContext(UserContext);
  return (
    <div className="navbar">
      <div className="game-title">
        <h3>Memory Game - Flags of the World!</h3>
      </div>
      <div align="center" className="name">
        <h3>{name.name}</h3>
      </div>
    </div>
  );
};

export default Navbar;
