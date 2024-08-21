import styled from "styled-components";

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 20px;
  text-align: center;
  z-index: 1;
  background-color: rgb(252, 252, 252);
  box-shadow: lightgray 0px 2px 8px;
  text-align: center;
  border-radius: 1rem;
`;

export default function TitleBar() {
  return <Headline>Tourio App</Headline>;
}
