import React from "react";
import styled from "styled-components";
import HeaderImage from "../assets/img/header.jpg";
import HeaderImageMobile from "../assets/img/header_mobile.jpg";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <FlexContainer>
          <TextContainer>
            <Title id="title">Nicolás Lucero</Title>
            <Subtitle id="subtitle">Software developer</Subtitle>
          </TextContainer>
        </FlexContainer>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  height: 100vh;
  background-image: url(${HeaderImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 140%;
  z-index: 3;
  @media (max-width: 768px) {
    background-image: url(${HeaderImageMobile}) !important;
  }
`;

const FlexContainer = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const TextContainer = styled.div`
  color: white;
  display: block;
  font-size: 20px;
  justify-content: center;
  text-align: center;
`;
const Title = styled.div`
  color: white;
  font-size: 2.4em;
  font-weight: 500;
  animation: cursor 1s infinite step-end;
  position: relative;
  font-size: 50px;
  font-weight: 200;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 6px 0 #0000003d;

  @media (max-width: 768px) {
    width: 80%;
    margin: 1em auto;
  }
`;
const Subtitle = styled.div`
  font-size: 1.3em;
  margin: 0;
  line-height: 1;
  font-weight: 200;
`;
