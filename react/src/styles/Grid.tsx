import styled, { keyframes } from "styled-components";
import { blue } from "./Colors";

export const GradientContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
  background-color: hsla(38, 100%, 95%, 1) 100%;
  opacity: 0.2;
  background-size: 20px 20px;
  background-image: repeating-linear-gradient(
    to right,
    ${blue},
    ${blue} 1px,
    white 1px,
    hsla(38, 100%, 95%, 1) 100%
  );

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const moveGradient = keyframes`
  0%, 100% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 0%;
  }
`;

const moveGradient2 = keyframes`
  0%, 100% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 0% 0%;
  }
`;

export const Lights = styled.div`
  z-index: 1;
  position: fixed;
  opacity: 0.8;
  width: 100%;
  height: 100vh;
  background-color: #d9afd9;
  background-image: linear-gradient(30deg, white 55%, #fffa9a 100%);
  background-size: 200% 100%; /* Adjust the size as needed */
  animation: ${moveGradient} 5s linear infinite; /* Adjust animation duration as needed */
`;

export const Lights2 = styled.div`
  z-index: 1;
  opacity: 0.4;
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #d9afd9;
  background-image: linear-gradient(320deg, white 55%, #ffacac 100%);
  background-size: 200% 100%; /* Adjust the size as needed */
  animation: ${moveGradient2} 3.5s linear infinite;
`;

export const FlexContainerRow = styled.div`
  display: flex;
  margin: auto;
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

export const Padding = styled.div`
  z-index: 5;
  box-sizing: border-box;
  padding: 7rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
