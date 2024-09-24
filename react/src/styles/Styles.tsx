import styled from "styled-components";
import { blue, ThemeProps, White } from "./Colors";

export const Title = styled.h2<ThemeProps>`
  display: inline;
  position: relative;
  letter-spacing: -3px;
  font-size: 4em;
  text-align: center;
  margin: 1em 0 1em 0;
  font-weight: lighter;
  color: ${(props) => (props.theme === "light" ? blue : White)};
  @media (max-width: 768px) {
    margin: 1em 0;
    font-size: 3em;
    letter-spacing: -3px;
  }
`;

export const DescriptionTitle = styled.div<ThemeProps>`
  font-size: 35px;
  line-height: 50px;
  color: ${(props) => (props.theme === "light" ? blue : "white")};
  letter-spacing: 1px;
  margin-bottom: 1em;
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0px;
  }
`;

export const DescriptionText = styled.p<ThemeProps>`
  font-size: 20px;
  line-height: 34px;
  color: ${(props) => (props.theme === "light" ? blue : White)};
  letter-spacing: 0px;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0px;
  }
`;

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const techno = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const RelativeContainer = styled.div<ThemeProps>`
  position: relative;
  z-index: 1;

  background-size: 100% 100%;
  &.dark {
    background: black;
  }

  &.light {
    background: white;
  }
`;

export const radius = "2rem";
