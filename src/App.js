import React, { useState, useEffect } from "react";
import Login from "./components/login";
import Board from "./components/board";
import Navbar from "./components/Navbar";
import EndGame from "./components/endGame.js";
import Game from "./components/Game.js";
import { UserContext } from "./userContext.js";
import initialCards from "./cards";
import useSound from "use-sound";
import cardClicked from "./assets/sounds/cardClicked.wav";
import cardMatched from "./assets/sounds/cardMatched.wav";
import endGameSound from "./assets/sounds/endGameSound.wav";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [solved, setSolved] = useState([]);
  const [showEndGame, setShowEndGame] = useState(false);
  const [clickOnCard] = useSound(cardClicked);
  const [clickCardMtached] = useSound(cardMatched);
  const [playEndGameSound] = useSound(endGameSound);

  useEffect(() => {
    setCards(initialCards());
  }, []);

  useEffect(() => {
    preloadImages();
  });

  const handleClick = (id) => {
    clickOnCard();
    setFlipped([...flipped, id]);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        clickCardMtached();
        setSolved([...solved, flipped[0], id]);
        resetCards();
        if ([...solved, flipped[0], id].length === initialCards().length) {
          playEndGameSound();
          setShowEndGame(true);
        }
      } else {
        setTimeout(resetCards, 300);
      }
    }
  };

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.country === clickedCard.country;
  };
  const preloadImages = () => {
    //pre-caching images
    cards.forEach((card) => {
      const src = `assets/img/${card.country}.png`;
      new Image().src = src;
    });
  };
  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = (id) => flipped.includes(id);

  return (
    <div>
      {name === "" ? (
        <Login handleName={setName} />
      ) : showEndGame === false ? (
        <>
          <h1>Can you rememeber where the flags are?</h1>
          <UserContext.Provider value={{ name, setName }}>
            <Navbar name={name} />
            <Board
              cards={cards}
              flipped={flipped}
              handleClick={handleClick}
              disabled={disabled}
              solved={solved}
            />
          </UserContext.Provider>
        </>
      ) : (
        <>
          {showEndGame ? (
            <EndGame
              newGame={setShowEndGame}
              cards={setCards}
              solved={setSolved}
            />
          ) : null}
          <Game endGame={setShowEndGame} />
        </>
      )}
    </div>
  );
}

export default App;
