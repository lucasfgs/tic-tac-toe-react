import React, { useState } from "react";

import { Container } from "./styles";
import Board from "./components/Board";
import Header from "./components/Header";
const App = () => {
  const [winner, setWinner] = useState("");

  return (
    <Container>
      <Header winner={winner} />
      <Board setWinner={setWinner} />
    </Container>
  );
};

export default App;
