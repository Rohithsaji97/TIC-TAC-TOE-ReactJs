import React from "react";

function Cells({ className, onClick, playerTurn, value }) {
  let hoverClass = null;
  if (value == null && playerTurn != null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }
  return (
    <div onClick={onClick} className={`cell ${className} ${hoverClass}`}>
      {value}
    </div>
  );
}

export default Cells;
