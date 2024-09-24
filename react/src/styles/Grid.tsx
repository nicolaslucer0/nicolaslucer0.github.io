import styled from "styled-components";
import gradient from "../assets/img/gradient/3.webp";
import gradient2 from "../assets/img/gradient/5.webp";
import gradientLight from "../assets/img/gradient/4.avif";

import { Brown, ThemeProps, White } from "./Colors";

export const Lights = styled.div<ThemeProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
   background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: ${(props) =>
    props.theme === "light"
      ? `url(${props.theme === "light" ? gradientLight : gradient});`
      : `linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ), url(${props.theme === "light" ? gradientLight : gradient});`}
  
  background-size: 100% 100%;
  opacity: 1;

`;

export const FlexContainerRow = styled.div`
  display: flex;
  margin: auto;
  border-radius: 2rem;
  z-index: 5;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const BluredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  border-radius: 30px;
  padding: 2em;
  width: 70%;
  margin: 2em 0;
  box-sizing: border-box;
  box-shadow: 0 0 9px 0 #00082935;
  backdrop-filter: blur(6px) saturate(1.7);
  -webkit-backdrop-filter: blur(6px) saturate(1.7);

  z-index: 1;

  &.light {
    background: #ffffff45;
    a {
      color: black;
    }
  }
  &.dark {
    background: #0008297d;
    color: white;
    a {
      color: white;
    }
  }
  @media (max-width: 768px) {
    padding: 1em;
    width: 90%;
  }
`;

export const Padding = styled.div<ThemeProps>`
  z-index: 5;
  box-sizing: border-box;
  background-size: 100% 150%;
  padding: 7rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
