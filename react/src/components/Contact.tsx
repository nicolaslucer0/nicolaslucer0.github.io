import styled from "styled-components";
import contact from "../assets/img/contact.jpeg";
import instagram from "../assets/img/social/instagram.png";
import linkedin from "../assets/img/social/linkedin.png";
import aboutme from "../assets/img/social/me.png";
import { blue } from "../styles/Colors";
import { Padding } from "../styles/Grid";
import {
  DescriptionText,
  DescriptionTitle,
  Title,
  radius,
} from "../styles/Styles";

export const Contact = () => (
  <Padding>
    <FlexContainerColumn id="contact">
      <Title>Lets work together!</Title>
      <FlexContainerRow>
        <FlexContainerColumn>
          <DescriptionTitle>
            "Life's a climb... but the view is great."
          </DescriptionTitle>
          <DescriptionText>
            In case you want to work with me,{" "}
            <Link href="mailto:nicolas.lucero1@gmail.com">
              email me to nicolas.lucero1@gmail.com
            </Link>
          </DescriptionText>
          <DescriptionText>Here you have more links:</DescriptionText>
          <FlexContainerRow>
            <InfoContainer>
              <Link target="_blank" href="https://about.me/nicolaslucero">
                <Logo src={aboutme} />
              </Link>
            </InfoContainer>
            <InfoContainer>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/nicolaslucer0/"
              >
                <Logo src={linkedin} />
              </Link>
            </InfoContainer>
            <InfoContainer>
              <Link target="_blank" href="https://instagram.com/nicolas.tsx">
                <Logo src={instagram} />
              </Link>
            </InfoContainer>
          </FlexContainerRow>
        </FlexContainerColumn>
        <Image
          src={contact}
          alt="I will leave an easter egg, or I did it already?"
        />
      </FlexContainerRow>
    </FlexContainerColumn>
  </Padding>
);

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: inline;
  text-decoration: none;
  color: ${blue};
  margin: auto;
  &:hover {
    text-decoration: underline;
  }
`;

const FlexContainerRow = styled.div`
  display: flex;
  margin: auto;
  object-fit: cover;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
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
  z-index: 2;
  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
  }
`;

const Logo = styled.img`
  width: 40px;
`;

const Image = styled.img`
  z-index: 3;
  width: 30%;
  position: relative;
  object-fit: contain;
  border-radius: ${radius};
  margin-left: 3rem;
  @media (max-width: 768px) {
    width: 100%;
    border-radius: ${radius};
    margin-left: 0;
  }
`;
