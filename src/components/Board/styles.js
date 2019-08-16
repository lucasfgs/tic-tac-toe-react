import styled from "styled-components";

export const Container = styled.div`
  border: 5px solid black;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: white;
  outline: 0;
  width: 100px;
  height: 100px;
  font-size: 50px;
`;
