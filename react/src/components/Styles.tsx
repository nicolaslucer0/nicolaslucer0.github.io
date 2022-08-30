import styled from "styled-components";

export const Title = styled.h2`
  display: inline;
  position: relative;
  letter-spacing: -3px;
  font-size: 4em;
  font-weight: lighter;
  text-align: center;
  padding: 1em;
  border-radius: 15px;

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
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
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
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
