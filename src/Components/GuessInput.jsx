import React, { useState } from "react";

function GuessInput({ handleGuess, gameOver }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!gameOver && guess) {
      handleGuess(Number(guess));
      setGuess("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your guess:
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          disabled={gameOver}
        />
      </label>
      <button type="submit" disabled={gameOver}>
        Guess
      </button>
    </form>
  );
}

export default GuessInput;
