import styled from "styled-components";
import bandera from "../assets/img/bandera.png";
import logoRedbee from "../assets/img/redbee_logo.png";
import { Black } from "../commons/Colors";
import { ThemeProps } from "../commons/ThemeProps";

export const AboutMe = ({ theme }: ThemeProps) => {
  return (
    <GradientContainer className={theme}>
      <SolidContainer className={theme}>
        <h2>About me.</h2>
        <FlexContainerRow id="about-me">
          <MyDescription>
            Hi! My name is Nico and I'am senior software engineer and javascript
            enthusiast. I am currently working in redbee studios, taking client
            ideas to next level, using agile methodologies and good practices.
            🚀
            <br />
            <br />
            <div>
              🎧 Electronic music producer
              <a
                href="https://www.youtube.com/watch?v=bbYfjTrX1lw"
                target="_blank"
                rel="noreferrer"
              >
                , check this tune
              </a>
            </div>
            📕 IT Profressor.
          </MyDescription>
          <MyItems>
            <div>
              📍 I'm from Buenos Aires, Argentina
              <LocationImage src={bandera} />
            </div>
            <div>
              💼 I'm currently working at
              <Redbee target="_blank" href="https://www.redbee.io/">
                <RedbeeImage src={logoRedbee} />
              </Redbee>
            </div>
          </MyItems>
        </FlexContainerRow>
      </SolidContainer>
    </GradientContainer>
  );
};
export default AboutMe;

const SolidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  border-radius: 10px;
  padding: 2em;
  width: 70%;

  &.light {
    background: white;
  }
  &.dark {
    background: ${Black};
  }
`;
const GradientContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 300% 300%;
  height: 100vh;
  width: 100%;

  &.light {
    background-image: linear-gradient(
      -45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      #2037a9 51%,
      #001348 100%
    );
  }
  &.dark {
    background-image: linear-gradient(
      -45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      #b4009c 51%,
      #6300b4 100%
    );
  }

  animation: AnimateBG 5s ease infinite;

  @keyframes AnimateBG {
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
    height: auto;
  }
`;
const FlexContainerRow = styled.div`
  display: flex;
  margin: auto;
`;
const LocationImage = styled.img`
  width: 40px;
  transition: 0.2s;
  margin: 0 10px;
  &:hover {
    transform: scale(1.2);
  }
`;

const RedbeeImage = styled.img`
  width: 90px;
  padding-left: 20px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Redbee = styled.a``;

const MyItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1em;
`;
const MyDescription = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  padding: 1em;

  @media (max-width: 768px) {
    width: 80%;
    padding: 0;
    margin: auto;
    height: auto;
  }
`;
