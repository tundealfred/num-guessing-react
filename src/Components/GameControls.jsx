import React from "react";

function GameControls({ restartGame, gameOver }) {
  return (
    <div>{gameOver && <button onClick={restartGame}>Restart Game</button>}</div>
  );
}

export default GameControls;
