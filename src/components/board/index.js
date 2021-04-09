import React from "react";
import Card from "../card";

const Board = ({ disabled, cards, flipped, solved, handleClick }) => {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          className="image image-blank"
          key={card.id}
          id={card.id}
          type={card.country}
          flipped={flipped.includes(card.id)}
          solved={disabled || solved.includes(card.id)}
          handleClick={handleClick}
          disabled={disabled || solved.includes(card.id)}
        />
      ))}
    </div>
  );
};

export default Board;
