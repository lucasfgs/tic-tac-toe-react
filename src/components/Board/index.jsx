import React, { useState, useEffect } from "react";

import { Container, Field } from "./styles";

const Board = () => {
  const player = ["X", "O"];

  const [board, setBoard] = useState([
    ["X", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);
  const [actualPlayer, setActualPlayer] = useState(player[0]);

  const renderBoard = [];
  let count = 0;

  const switchPlayer = () => {
    player[0] === actualPlayer
      ? setActualPlayer(player[1])
      : setActualPlayer(player[0]);
  };

  const handleClick = e => {
    let currentField = e.currentTarget;
    currentField.innerHTML = actualPlayer;
    switchPlayer();
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      count++;
      renderBoard.push(
        <Field key={count} onClick={handleClick}>
          {board[i][j]}
        </Field>
      );
    }
  }

  return <Container>{renderBoard}</Container>;
};

export default Board;
