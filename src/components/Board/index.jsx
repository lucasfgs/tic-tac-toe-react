import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import Square from "../Square";

const Board = () => {
  const player = ["X", "O"];

  const [board, setBoard] = useState([["X"], [], [], [], [], [], [], [], []]);
  const [actualPlayer, setActualPlayer] = useState(player[0]);

  const switchPlayer = () => {
    player[0] === actualPlayer
      ? setActualPlayer(player[1])
      : setActualPlayer(player[0]);
  };

  const handleClick = (e, index) => {
    console.log(e, index);
    setBoard();
    switchPlayer();
  };

  return (
    <Container>
      {board.map((square, i) => {
        return (
          <Square
            key={i}
            handleClick={handleClick}
            value={board[i]}
            index={i}
          />
        );
      })}
    </Container>
  );
};

export default Board;
