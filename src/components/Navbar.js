import React, { useContext } from "react";
import { UserContext } from "../userContext";

const Navbar = () => {
  const { name, setName } = useContext(UserContext);
  return (
    <div className="navbar">
      <div className="game-title">Memory Game</div>
      <div className="name">{name.name}</div>
    </div>
  );
};

export default Navbar;
