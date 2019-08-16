import React, { useState } from "react";

import { Container, Field } from "./styles";

const Board = () => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);
  const player = ["X", "O"];

  console.log(board);

  const [actualPlayer, setActualPlayer] = useState(player[0]);

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

  return (
    <Container>
      <Field onClick={handleClick}>{board[0][0]}</Field>
      <Field onClick={handleClick}>{board[0][1]}</Field>
      <Field onClick={handleClick}>{board[0][2]}</Field>
      <Field onClick={handleClick}>{board[1][0]}</Field>
      <Field onClick={handleClick}>{board[1][1]}</Field>
      <Field onClick={handleClick}>{board[1][2]}</Field>
      <Field onClick={handleClick}>{board[2][0]}</Field>
      <Field onClick={handleClick}>{board[2][1]}</Field>
      <Field onClick={handleClick}>{board[2][1]}</Field>
    </Container>
  );
};

export default Board;
