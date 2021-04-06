import React, { useState } from "react";

const messages = [
  { title: "Well Done", message: "How about another go?" },
  { title: "Good Job", message: "I bet you can not do that again?" },
  {
    title: "Nice Job",
    message: "You think you can do it faster next time?",
  },
];

const EndGame = (props) => {
  const [name, setName] = useState();
  const [showEndGame, setShowEndGame] = useState(false);
  const handleClick = () => {
    setName("");

    console.log(props.newGame(false));
    props.newGame(false);
  };

  messages.sort(() => Math.random() - 0.5);
  return (
    <div className="end-game">
      <div className="message">
        <h2>{messages[0].title}</h2>
        <p>{messages[0].message}</p>
        <button className="btn btn-primary" onClick={handleClick}>
          Go Again
        </button>
      </div>
    </div>
  );
};

export default EndGame;
