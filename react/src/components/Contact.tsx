import styled from "styled-components";
import { Title } from "./Styles";
import instagram from "../assets/img/social/instagram.png";
import gmail from "../assets/img/social/gmail.png";
import linkedin from "../assets/img/social/linkedin.png";
import contact from "../assets/img/contact.jpeg";
import twitch from "../assets/img/social/twitch.png";
import aboutme from "../assets/img/social/me.png";
import { ThemeProps } from "../commons/ThemeProps";

export const Contact = ({ theme }: ThemeProps) => {
  return (
    <>
      <FlexContainerColumn id="contact">
        <Title className={`title-${theme}`}>How to contact me?</Title>
        <FlexContainerRow>
          <Image
            src={contact}
            alt="I will leave an easter egg, or I did it already?"
          />
          <Card>
            <InfoContainer>
              <Logo src={gmail} />
              <Link href="mailto:nicolas.lucero1@gmail.com">
                nicolas.lucero1@gmail.com
              </Link>
            </InfoContainer>
            <InfoContainer>
              <Logo src={aboutme} />
              <Link target="_blank" href="https://about.me/nicolaslucero">
                About me
              </Link>
            </InfoContainer>
            <InfoContainer>
              <Logo src={linkedin} />
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/nicolaslucero1/"
              >
                Linkedin
              </Link>
            </InfoContainer>
            <InfoContainer>
              <Logo src={instagram} />
              <Link target="_blank" href="https://instagram.com/nicolaslucerox">
                Instagram
              </Link>
            </InfoContainer>
            <InfoContainer>
              <Logo src={twitch} />
              <Link target="_blank" href="https://twitch.com/luceroxxx">
                Twitch
              </Link>
            </InfoContainer>
          </Card>
        </FlexContainerRow>
      </FlexContainerColumn>
      <LightContainer>
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      </LightContainer>
    </>
  );
};

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  flex-grow: 1;
  width: 100%;
  padding: 1em;
  position: relative;
  box-sizing: border-box;
  transition: 0.5s;
  &:hover {
    background-color: #eaeaea;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  text-align: start;
  flex-grow: 1;
  text-align: start;
  justify-content: flex-start;
  margin: 0 1em;
  &:hover {
    text-decoration: underline;
  }
`;

const FlexContainerRow = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  object-fit: cover;
  position: relative;
  width: 43%;
  box-shadow: 3px 3px 5px 0px #00000054;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 5em auto;
  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
  }
`;

const Card = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  flex-direction: column;
  position: relative;
  flex-grow: 0;
  box-sizing: border-box;
  align-items: center;
  box-shadow: 3px 3px 5px 0px #00000054;
  border-radius: 0 10px 10px 0;
  border: 1px solid #ececec;
  transition: 0.5s;
  background-color: white;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    border-radius: 10px 10px 0 0;
  }
`;

const Logo = styled.img`
  width: 10%;
`;

const Image = styled.img`
  z-index: 3;
  width: 60%;
  position: relative;
  object-fit: contain;
  border-radius: 10px 0 0 10px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 10px 10px;
  }
`;

const LightContainer = styled.div`
  z-index: 0;
  width: 100%;
  position: relative;
  heigh: 10vh;
  .light {
    position: absolute;
    width: 0px;
    opacity: 0.75;
    background-color: white;
    box-shadow: #e9f1f1 0px 0px 20px 2px;
    opacity: 0;
    top: 100vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
  }

  .x1 {
    -webkit-animation: floatUp 4s infinite linear;
    -moz-animation: floatUp 4s infinite linear;
    -o-animation: floatUp 4s infinite linear;
    animation: floatUp 4s infinite linear;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  .x2 {
    -webkit-animation: floatUp 7s infinite linear;
    -moz-animation: floatUp 7s infinite linear;
    -o-animation: floatUp 7s infinite linear;
    animation: floatUp 7s infinite linear;
    -webkit-transform: scale(1.6);
    -moz-transform: scale(1.6);
    -o-transform: scale(1.6);
    transform: scale(1.6);
    left: 15%;
  }

  .x3 {
    -webkit-animation: floatUp 2.5s infinite linear;
    -moz-animation: floatUp 2.5s infinite linear;
    -o-animation: floatUp 2.5s infinite linear;
    animation: floatUp 2.5s infinite linear;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
    left: -15%;
  }

  .x4 {
    -webkit-animation: floatUp 4.5s infinite linear;
    -moz-animation: floatUp 4.5s infinite linear;
    -o-animation: floatUp 4.5s infinite linear;
    animation: floatUp 4.5s infinite linear;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    left: -34%;
  }

  .x5 {
    -webkit-animation: floatUp 8s infinite linear;
    -moz-animation: floatUp 8s infinite linear;
    -o-animation: floatUp 8s infinite linear;
    animation: floatUp 8s infinite linear;
    -webkit-transform: scale(2.2);
    -moz-transform: scale(2.2);
    -o-transform: scale(2.2);
    transform: scale(2.2);
    left: -57%;
  }

  .x6 {
    -webkit-animation: floatUp 3s infinite linear;
    -moz-animation: floatUp 3s infinite linear;
    -o-animation: floatUp 3s infinite linear;
    animation: floatUp 3s infinite linear;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
    left: -81%;
  }

  .x7 {
    -webkit-animation: floatUp 5.3s infinite linear;
    -moz-animation: floatUp 5.3s infinite linear;
    -o-animation: floatUp 5.3s infinite linear;
    animation: floatUp 5.3s infinite linear;
    -webkit-transform: scale(3.2);
    -moz-transform: scale(3.2);
    -o-transform: scale(3.2);
    transform: scale(3.2);
    left: 37%;
  }

  .x8 {
    -webkit-animation: floatUp 4.7s infinite linear;
    -moz-animation: floatUp 4.7s infinite linear;
    -o-animation: floatUp 4.7s infinite linear;
    animation: floatUp 4.7s infinite linear;
    -webkit-transform: scale(1.7);
    -moz-transform: scale(1.7);
    -o-transform: scale(1.7);
    transform: scale(1.7);
    left: 62%;
  }

  .x9 {
    -webkit-animation: floatUp 4.1s infinite linear;
    -moz-animation: floatUp 4.1s infinite linear;
    -o-animation: floatUp 4.1s infinite linear;
    animation: floatUp 4.1s infinite linear;
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -o-transform: scale(0.9);
    transform: scale(0.9);
    left: 85%;
  }

  button:focus {
    outline: none;
  }

  @-webkit-keyframes floatUp {
    0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
  }
  @-moz-keyframes floatUp {
    0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
  }
  @-o-keyframes floatUp {
    0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
  }
  @keyframes floatUp {
    0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
  }
`;
