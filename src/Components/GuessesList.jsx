import React from "react";

function GuessesList({ guesses }) {
  return (
    <div>
      <h3>Previous Guesses:</h3>
      <ul>
        {guesses.map((guess, index) => (
          <li key={index}>{guess}</li>
        ))}
      </ul>
    </div>
  );
}

export default GuessesList;
