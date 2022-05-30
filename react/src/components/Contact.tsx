import styled from "styled-components";
import { Title } from "./Styles";
import instagram from "../Assets/img/social/instagram.png";
import gmail from "../Assets/img/social/gmail.png";
import linkedin from "../Assets/img/social/linkedin.png";
import contact from "../Assets/img/contact.jpeg";
import twitch from "../Assets/img/social/twitch.png";
import aboutme from "../Assets/img/social/me.png";
import { ThemeProps } from "../Commons/ThemeProps";

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
  width: 60%;
  position: relative;
  object-fit: contain;
  border-radius: 10px 0 0 10px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 10px 10px;
  }
`;
