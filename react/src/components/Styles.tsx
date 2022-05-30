import styled from "styled-components";

export const Title = styled.h2`
  display: inline;
  position: relative;
  letter-spacing: -3px;
  font-size: 4em;
  font-weight: lighter;
  text-align: center;
  @media (max-width: 768px) {
    margin: 1em 0;
    font-size: 3em;
    letter-spacing: -3px;
  }
`;
