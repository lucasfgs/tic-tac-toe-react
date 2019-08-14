import styled from "styled-components";

export const Container = styled.div`
  border: 5px solid black;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  button {
    border: 1px solid black;
    outline: 0;
    width: 100px;
    height: 100px;
    font-size: 50px;
  }
`;
