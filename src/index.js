import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Board from "./components/Board";

function App() {
  return (
    <>
      <Board />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
