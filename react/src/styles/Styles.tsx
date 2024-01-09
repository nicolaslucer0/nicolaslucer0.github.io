import styled from "styled-components";

export const Title = styled.h2`
  display: inline;
  position: relative;
  letter-spacing: -3px;
  font-size: 4em;
  font-weight: lighter;
  text-align: center;
  margin: 1em 0 1em 0;
  @media (max-width: 768px) {
    margin: 1em 0;
    font-size: 3em;
    letter-spacing: -3px;
  }
`;

export const FireFly = styled.div``;

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

export const RelativeContainer = styled.div`
  position: relative;
  z-index: 1;
  &.dark {
    background: black;
  }

  &.light {
    background: white;
  }
`;

export const radius = "20px";
