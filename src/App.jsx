import React, { useState } from "react";
import GuessInput from "./Components/GuessInput";
import GuessesList from "./Components/GuessesList";
import StatusMessage from "./Components/StatusMessage";
import GameControls from "./Components/GameControls";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guesses, setGuesses] = useState([]);
  const [turn, setTurn] = useState(1);
  const [status, setStatus] = useState("");
  const [gameOver, setGameOver] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess(guess) {
    if (gameOver) return;

    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    if (guess == randomNumber) {
      setStatus("Congratulations! You guessed the number!");
      setGameOver(true);
    } else if (turn >= 10) {
      setStatus(`Game over! The number was ${randomNumber}.`);
      setGameOver(true);
    } else if (guess > randomNumber) {
      setStatus("Too high!");
    } else {
      setStatus("Too low!");
    }

    setTurn(turn + 1);
  }

  function restartGame() {
    setRandomNumber(generateRandomNumber());
    setGuesses([]);
    setTurn(1);
    setStatus("");
    setGameOver(false);
  }

  return (
    <div className="game-container">
      <h1>Guess the Number</h1>
      <StatusMessage status={status} />
      <GuessInput handleGuess={handleGuess} gameOver={gameOver} />
      <GuessesList guesses={guesses} />
      <GameControls restartGame={restartGame} gameOver={gameOver} />
    </div>
  );
}

export default App;
