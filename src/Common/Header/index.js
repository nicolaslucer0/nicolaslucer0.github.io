import React from "react";
import styled from "styled-components";
import HeaderImage from "../../Assets/img/header.jpg";
const Header = (props) => {
  return (
    <>
      <HeaderContainer>
        <FlexContainer>
          <TextContainer>
            <Subtitle>Nicolás Lucero</Subtitle>
            <Title>Software developer & designer</Title>
          </TextContainer>
        </FlexContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
   {
    width: 100%;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    height: 100vh;
    background-image: url(${HeaderImage});
    background-size: cover;
  }
`;

const FlexContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
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
  color: var(--white);
  display: block;
  font-size: 20px;
  letter-spacing: 0.18em;
  justify-content: center;
  text-align: center;
`;
const Title = styled.div`
  font-size: 1.3em;
  margin: 0;
  line-height: 1;
`;
const Subtitle = styled.div`
  color: var(--white);
  font-size: 2.4em;
  font-weight: 500;
`;
