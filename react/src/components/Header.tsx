import styled from "styled-components";
import { blue } from "../styles/Colors";

export const Header = () => (
  <>
    <HeaderContainer>
      <FlexContainer>
        <TextContainer>
          <Title id="title">I'm Nicolás Lucero.</Title>
          <Subtitle id="subtitle">A software developer.</Subtitle>
        </TextContainer>
      </FlexContainer>
    </HeaderContainer>
  </>
);

const HeaderContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  height: 100vh;
  z-index: 3;
`;

const FlexContainer = styled.div`
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
  color: white;
  display: block;
  font-size: 20px;
  justify-content: center;
  text-align: center;
`;
const Title = styled.div`
  color: ${blue};
  font-size: 8rem;
  font-weight: 500;
  position: relative;
  font-weight: 200;
  letter-spacing: -4px;
  padding: 5px 10px;
  font-weight: bolder;
  @media (max-width: 768px) {
    width: 80%;
    font-size: 4rem;
    margin: 1em auto;
    letter-spacing: -1px;
  }
`;
const Subtitle = styled.div`
  color: ${blue};
  font-size: 5rem;
  font-weight: 500;
  position: relative;
  font-weight: 200;
  letter-spacing: -4px;
  padding: 5px 10px;
  font-weight: bolder;
  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: -1px;
    font-weight: lighter;
  }
`;
