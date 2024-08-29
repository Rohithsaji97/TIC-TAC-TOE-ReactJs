import React from "react";

function AfterGame({ gameState }) {
  switch (gameState) {
    case 0:
      return <div className="Game-over">Player X Wins</div>;
    case 1:
      return <div className="Game-over">Player O Wins</div>;
    case 2:
      return <div className="Game-over">DRAW</div>;
    case 3:
      return <></>;
    default:
      return <></>;
  }
}

export default AfterGame;
