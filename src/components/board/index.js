import React from "react";
import Card from "../card/index";

const Board = ({ disabled, cards, flipped, solved, handleClick }) => {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card
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
