import React, { useEffect, useState } from "react";
import Container from "./Container";
import AfterGame from "./AfterGame";
import Reset from "./Reset";
import gameOverSoundAsset from "../Sounds/game_over.wav";
import clickSoundAsset from "../Sounds/click.wav";

const gameOverSound = new Audio(gameOverSoundAsset);
gameOverSound.volume = 0.2;
const clickSound = new Audio(clickSoundAsset);
clickSound.volume = 0.5;

const GameState = {
  playerXWins: 0,
  playerOWins: 1,
  draw: 2,
  inProgress: 3,
};

const PLAYER_X = "X";
const PLAYER_0 = "O";

const winningConditions = [
  //Rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },
  //column
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },
  //diagonal
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(cells, setStrikeClass, setGameState, setPlayerTurn) {
  const areAllCellsFilledIn = cells.every((cell) => cell !== null);
  if (areAllCellsFilledIn) {
    setPlayerTurn(null);
    setGameState(GameState.draw);
  }
  for (const { combo, strikeClass } of winningConditions) {
    const cellValue1 = cells[combo[0]];
    const cellValue2 = cells[combo[1]];
    const cellValue3 = cells[combo[2]];

    if (
      cellValue1 !== null &&
      cellValue1 === cellValue2 &&
      cellValue2 === cellValue3
    ) {
      setStrikeClass(strikeClass);
      if (cellValue1 === PLAYER_X) {
        setPlayerTurn(null);
        setGameState(GameState.playerXWins);
      } else {
        setPlayerTurn(null);
        setGameState(GameState.playerOWins);
      }
    }
  }
}

function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  const pressedCell = (i) => {
    if (gameState !== GameState.inProgress) {
      setPlayerTurn(null);
      return;
    }

    if (cells[i] != null) {
      return;
    }

    const newCells = [...cells];
    newCells[i] = playerTurn;
    setCells(newCells);

    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_0);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  const pressReset = () => {
    setCells(Array(9).fill(null));
    setGameState(GameState.inProgress);
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
  };

  useEffect(() => {
    checkWinner(cells, setStrikeClass, setGameState, setPlayerTurn);
  }, [cells]);

  useEffect(() => {
    if (cells.some((cell) => cell !== null)) {
      clickSound.play();
    }
  }, [cells]);

  useEffect(() => {
    if (gameState !== GameState.inProgress) {
      gameOverSound.play();
    }
  }, [gameState]);

  useEffect(() => {
    if (strikeClass) {
      const timer = setTimeout(() => {
        document
          .querySelector(`.${strikeClass}`)
          .classList.add("strike-active");
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [strikeClass]);

  return (
    <div>
      <h1 className={"heading"}>TIC-TAC-TOE</h1>
      <br />
      <Container
        onPress={pressedCell}
        playerTurn={playerTurn}
        cells={cells}
        strikeClass={strikeClass}
      />
      <AfterGame gameState={gameState} />
      <Reset gameState={gameState} onReset={pressReset} />
    </div>
  );
}

export default TicTacToe;
