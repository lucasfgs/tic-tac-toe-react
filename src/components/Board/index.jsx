import React, { useState } from "react";

import { Container } from "./styles";

const Board = () => {
  const [board, useBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);
  const [player, usePlayer] = useState(["X", "O"]);

  const handleClick = e => {
    console.log(board);
  };

  return (
    <Container>
      <button onClick={handleClick}>{board[0][0]}</button>
      <button>{board[0][1]}</button>
      <button>{board[0][2]}</button>
      <button>{board[1][0]}</button>
      <button>{board[1][1]}</button>
      <button>{board[1][2]}</button>
      <button>{board[2][0]}</button>
      <button>{board[2][1]}</button>
      <button>{board[2][1]}</button>
    </Container>
  );
};

export default Board;
