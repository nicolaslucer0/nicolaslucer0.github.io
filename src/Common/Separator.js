import React from "react";
import styled from "styled-components";

const Separator = () => {
  return (
    <Svg
      class="editorial"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 
58-18 88-18s
58 18 88 18 
58-18 88-18 
58 18 88 18
v44h-352z"
        />
      </defs>
      <g class="parallax1">
        <use xlinkHref="#gentle-wave" x="50" y="15" fill="#ff4425bb" />
      </g>
      <g class="parallax2">
        <use xlinkHref="#gentle-wave" x="50" y="12" fill="#00F57Fbb" />
      </g>
      <g class="parallax3">
        <use xlinkHref="#gentle-wave" x="50" y="21" fill="#EB10E3bb" />
      </g>
      <g class="parallax4">
        <use xlinkHref="#gentle-wave" x="50" y="18" fill="#002499bb" />
      </g>
    </Svg>
  );
};
export default Separator;

const Svg = styled.svg`
  display: block;
  width: 100%;
  height: 60px;
  max-height: 60px;
  margin: 0;
  z-index: 5;
  bottom: 0;
  position: fixed;
  left: 0px;
  float: left;

  .parallax1 > use {
    animation: move-forever1 10s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
    }
  }
  .parallax2 > use {
    animation: move-forever2 8s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
    }
  }
  .parallax3 > use {
    animation: move-forever3 6s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
    }
  }
  .parallax4 > use {
    animation: move-forever4 4s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
    }
  }
  @keyframes move-forever1 {
    0% {
      transform: translate(85px, 0%);
    }
    100% {
      transform: translate(-90px, 0%);
    }
  }
  @keyframes move-forever2 {
    0% {
      transform: translate(-90px, 0%);
    }
    100% {
      transform: translate(85px, 0%);
    }
  }
  @keyframes move-forever3 {
    0% {
      transform: translate(85px, 0%);
    }
    100% {
      transform: translate(-90px, 0%);
    }
  }
  @keyframes move-forever4 {
    0% {
      transform: translate(-90px, 0%);
    }
    100% {
      transform: translate(85px, 0%);
    }
  }
`;
