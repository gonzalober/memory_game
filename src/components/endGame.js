import React from "react";

const messages = [
  { title: "Well Done", message: "How about another go?" },
  { title: "Good Job", message: "I bet you can not do that again?" },
  {
    title: "Look at you",
    message: "You think you can do it faster next time?",
  },
  { title: "Way to go!", message: "That was lightening fast, Try again?" },
];

const EndGame = (props) => {
  const handleClick = () => {
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
