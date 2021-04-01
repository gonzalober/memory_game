import React, { useState, useEffect } from "react";
import Login from "./components/login";
import Board from "./components/board";
import Navbar from "./components/Navbar";
import EndGame from "./components/endGame.js";
import Game from "./components/Game.js";
import { UserContext } from "./userContext.js";
import initialCards from "./cards";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]); //tracks the cards' id
  const [dimension, setDimension] = useState(400);
  const [disabled, setDisabled] = useState(false);
  const [solved, setSolved] = useState([]); //tracks the cards' id
  const [showEndGame, setShowEndGame] = useState(false);

  useEffect(() => {
    resizeBoard();
    setCards(initialCards());
  }, []);

  useEffect(() => {
    preloadImages();
  });

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  useEffect(() => {
    const resizeListener = () => {
      window.addEventListener("resize", resizeBoard());
    };
    return () => {
      window.removeEventListener("resize", resizeListener());
    };
  });
  //const handleClick = (id) => setFlipped([...flipped, id]);
  const handleClick = (id) => {
    //setDisabled(true);
    setFlipped([...flipped, id]);
    if (flipped.length === 0) {
      setFlipped([id]);
      console.log("setFLIPEDDDD", setFlipped([id]));
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 500);
      }
    }
  };

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    console.log("FLIPPED CARD", flippedCard);
    console.log("CLICKEDDS CARD", clickedCard);
    return flippedCard.country === clickedCard.country;
  };
  const preloadImages = () => {
    //pre-caching images
    cards.forEach((card) => {
      //console.log(card.country);
      const src = `assets/img/${card.country}.png`;
      //console.log(src);
      new Image().src = src;
    });
  };
  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = (id) => flipped.includes(id);

  const handleEndGame = (boolean) => {
    if (boolean) {
      setShowEndGame({ showEndGame: boolean });
    } else {
      setShowEndGame({ showEndGame: boolean });
    }
  };
  return (
    <div className="App">
      {name === "" ? (
        <Login handleName={setName} />
      ) : (
        <>
          <h2>Can you rememeber where the flags are?</h2>
          <UserContext.Provider value={{ name, setName }}>
            <Navbar handleName={name} />
            <Board
              dimension={dimension}
              cards={cards}
              flipped={flipped}
              handleClick={handleClick}
              disabled={disabled}
              solved={solved}
            />
          </UserContext.Provider>
        </>
      )}
      {showEndGame ? <EndGame newGame={handleEndGame} /> : null}
      <Game endGame={handleEndGame} />
    </div>
  );
}

export default App;
