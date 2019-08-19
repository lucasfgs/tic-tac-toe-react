import React from "react";

import { Container } from "./styles";

const Header = ({ winner }) => {
  return (
    <Container>
      <h1>Tic Tac toe</h1>
      {winner && <h3>Winner {winner}</h3>}
    </Container>
  );
};

export default Header;
