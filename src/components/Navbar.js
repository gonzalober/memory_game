import React, { useState, useEffect } from "react";

const Navbar = (props) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    props.handleName(name);
    console.log(name);
  };

  return (
    <div className="navbar">
      <div className="game-title">Memory Game</div>
      <div className="name">{handleChange}</div>
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default Navbar;
