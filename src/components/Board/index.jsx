import React, { useState } from "react";

import { Container } from "./styles";
import Square from "../Square";

const Board = ({ setWinner }) => {
  const player = ["X", "O"];
  const initialBoardState = ["", "", "", "", "", "", "", "", ""];

  const [board, setBoard] = useState(initialBoardState);
  const [actualPlayer, setActualPlayer] = useState(player[0]);

  const switchPlayer = () => {
    player[0] === actualPlayer
      ? setActualPlayer(player[1])
      : setActualPlayer(player[0]);
  };

  const handleClick = index => {
    let updatedBoard = board;
    board[index] = actualPlayer;
    setBoard(updatedBoard);
    verifyWinner();
    switchPlayer();
  };

  const verifyWinner = () => {
    let possibleLines = [
      [0, 1, 2], //Horizontal
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], //Vertical
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], //Diagonal
      [2, 4, 6]
    ];

    possibleLines.map(line => {
      if (
        board[line[0]] === actualPlayer &&
        board[line[1]] === actualPlayer &&
        board[line[2]] === actualPlayer
      ) {
        setWinner(actualPlayer);
      }
      return line;
    });
  };

  return (
    <Container>
      {board.map((square, i) => {
        return (
          <Square key={i} handleClick={handleClick} value={square} index={i} />
        );
      })}
    </Container>
  );
};

export default Board;
