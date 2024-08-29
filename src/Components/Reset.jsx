import React from "react";

function Reset({ onReset, gameState }) {
  if (gameState === 3) {
    return;
  }
  return (
    <button onClick={onReset} className="reset-button">
      Play Again!!
    </button>
  );
}

export default Reset;
