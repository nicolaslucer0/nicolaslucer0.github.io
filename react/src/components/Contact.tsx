import styled from "styled-components";
import contact from "../assets/img/contact.jpeg";
import gmail from "../assets/img/social/gmail.png";
import instagram from "../assets/img/social/instagram.png";
import linkedin from "../assets/img/social/linkedin.png";
import aboutme from "../assets/img/social/me.png";
import { Title, radius } from "../styles/Styles";
import { blue } from "../styles/Colors";

export const Contact = () => {
  return (
    <>
      <FlexContainerColumn id="contact">
        <Title className={`title-white`}>How to contact me?</Title>
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
                href="https://www.linkedin.com/in/nicolaslucer0/"
              >
                Linkedin
              </Link>
            </InfoContainer>
            <InfoContainer>
              <Logo src={instagram} />
              <Link target="_blank" href="https://instagram.com/nicolas.tsx">
                Instagram
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
  flex-grow: 1;
  width: 100%;
  padding: 1em;
  position: relative;
  box-sizing: border-box;
  transition: 0.5s;

  &:hover {
    background-color: #eaeaea73;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  text-align: start;
  flex-grow: 1;
  text-align: start;
  justify-content: flex-start;
  margin: 0 1em;
  color: ${blue};
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
  position: relative;
  .asd {
    position: absolute !important;
  }
  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
  }
`;

const Card = styled.div`
  z-index: 1;
  position: relative;
  background: #ffffff63;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  flex-direction: column;
  position: relative;
  flex-grow: 0;
  box-sizing: border-box;
  align-items: center;
  border-radius: 0 ${radius} ${radius} 0;
  transition: 0.5s;

  &.dark {
    a {
      color: white;
    }
  }
  &.light {
    a {
      color: black;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    border-radius: ${radius} ${radius} 0 0;
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
  border-radius: ${radius} 0 0 ${radius};

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 ${radius} ${radius};
  }
`;
