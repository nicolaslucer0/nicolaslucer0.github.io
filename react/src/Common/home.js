import React from "react";
import styled from "styled-components";
const fondito = require("../Assets/img/fondito.jpg");
const bob = require("../Assets/img/bob.gif");

const Home = () => {
  return (
    <FlexContainerColumn>
      <Title>Página en construcción</Title>
      <Subtitle>Estoy trabajando en esta web, va a quedar joya.</Subtitle>
      <Img src={bob}></Img>
    </FlexContainerColumn>
  );
};
export default Home;

const FlexContainerColumn = styled.div`
   {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background: blue;
    justify-content: center;
    align-items: center;
    background-image: url(${fondito});
  }
`;

const Title = styled.h1`
   {
    font-size: 5em;
    color: white;
    transition: 0.4s;
    &:hover {
      transform: scale(1.3);
    }
  }
`;

const Subtitle = styled.h2`
   {
    font-size: 2em;
    color: white;
    font-weight: normal;
    transition: 0.4s;
    &:hover {
      transform: scale(1.3);
    }
  }
`;

const Img = styled.img`
   {
    width: 20%;
  }
`;
