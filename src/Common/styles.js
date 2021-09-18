import styled from "styled-components";

export const Title = styled.h2`
  display: inline;
  position: relative;
  letter-spacing: -5px;
  font-size: 6em;
  font-weight: lighter;
  color: rgba(0, 0, 255, 0.5);
  text-align: center;
  @media (max-width: 768px) {
    margin: 1em 0;
    font-size: 3em;
    letter-spacing: -3px;
  }
`;
