import React from "react";

function Strike({ strikeClass }) {
  console.log(strikeClass);
  return <div className={`strike ${strikeClass}`}></div>;
}

export default Strike;
