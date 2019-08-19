import React from "react";

import { Container } from "./styles";

const Square = ({ index, value, handleClick }) => {
  return <Container onClick={() => handleClick(index)}>{value}</Container>;
};

export default Square;
