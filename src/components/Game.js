import React from "react";
import EndGame from "./endGame";
const Game = (props) => {
  return (
    <div>
      <EndGame endGame={props.endGame} />
    </div>
  );
};

export default Game;
