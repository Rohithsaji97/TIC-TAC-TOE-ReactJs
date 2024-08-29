import React from "react";
import Cells from "./Cells";
import Strike from "./Strike";

function Container({ onPress, playerTurn, cells, strikeClass }) {
  return (
    <div className={"container"}>
      <Cells
        value={cells[0]}
        playerTurn={playerTurn}
        onClick={() => onPress(0)}
        className={"right-border bottom-border"}
      />
      <Cells
        value={cells[1]}
        playerTurn={playerTurn}
        onClick={() => onPress(1)}
        className={"right-border bottom-border"}
      />
      <Cells
        value={cells[2]}
        playerTurn={playerTurn}
        onClick={() => onPress(2)}
        className={"bottom-border"}
      />
      <Cells
        value={cells[3]}
        playerTurn={playerTurn}
        onClick={() => onPress(3)}
        className={"right-border bottom-border"}
      />
      <Cells
        value={cells[4]}
        playerTurn={playerTurn}
        onClick={() => onPress(4)}
        className={"right-border bottom-border"}
      />
      <Cells
        value={cells[5]}
        playerTurn={playerTurn}
        onClick={() => onPress(5)}
        className={"bottom-border"}
      />
      <Cells
        value={cells[6]}
        playerTurn={playerTurn}
        onClick={() => onPress(6)}
        className={"right-border"}
      />
      <Cells
        value={cells[7]}
        playerTurn={playerTurn}
        onClick={() => onPress(7)}
        className={"right-border"}
      />
      <Cells
        value={cells[8]}
        playerTurn={playerTurn}
        onClick={() => onPress(8)}
      />
      <Strike strikeClass={strikeClass} />
    </div>
  );
}

export default Container;
