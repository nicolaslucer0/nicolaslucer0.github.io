import React from "react";
import styled from "styled-components";
import { Title } from "../styles/Styles";

export const NotFound = () => {
  return (
    <>
      <FlexContainerRow>
        <Image src={require("../Assets/img/man.svg")}></Image>
        <FlexContainerColumn>
          <Title>404</Title>
          <h2>This page does not exists</h2>
          <Link href="/">Try going to home screen</Link>
        </FlexContainerColumn>
      </FlexContainerRow>
    </>
  );
};

const FlexContainerRow = styled.div`
  display: flex;
  height: 100vh;
  width: 70%;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
  }
`;

const Image = styled.img`
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Link = styled.a`
  text-align: center;
  font-size: 2em;
  color: black;
  text-decoration: none;
  transition: 1s;
  &:hover {
    transform: scale(1.2);
  }
`;
