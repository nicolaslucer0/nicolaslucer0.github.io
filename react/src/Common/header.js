import React from "react";
import styled from "styled-components";
import HeaderImage from "../Assets/img/header.jpg";
const Header = () => {

  document.addEventListener("mousemove", parallax);

  function parallax(e) {
    const parallax = document.querySelector("#parallax");
    const title = document.querySelector("#subtitle");
    const subtitle = document.querySelector("#title");
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.008}% ${50 - (_mouseY - _h) * 0.008}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.008}% ${50 - (_mouseY - _h) * 0.008}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.008}% ${50 - (_mouseY - _h) * 0.008}%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    parallax.style.backgroundPosition = x;
    title.style.transform = `translate(${(_mouseX - _w) * -0.02}px, ${(_mouseY - _h)  * -0.02}px)`;
    subtitle.style.transform = `translate(${(_mouseX - _w) * -0.02}px, ${(_mouseY - _h)  * -0.02}px)`;
  }

  return (
    <>
      <HeaderContainer id="parallax">
        <FlexContainer>
          <TextContainer>
            <Subtitle id="title">Nicolás Lucero</Subtitle>
            <Title id="subtitle">Software developer <Ampersan>&</Ampersan> designer</Title>
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
    background-repeat: no-repeat;
    background-position: center;
    background-position: 50% 50%;
    background-size: 120%;
    
    background-attachment: fixed;
  }
`;

const Ampersan = styled.span`{
  font-size: 2em;
  text-shadow: 4px -1px 0px #4f7dff;
    color: white;
}`;

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
