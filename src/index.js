import React from "react";
import ReactDOM from "react-dom";

import { Container } from "./styles";
import "./style.css";
import Board from "./components/Board";

function App() {
  return (
    <Container>
      <Board />
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
