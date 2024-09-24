import styled from "styled-components";
import aboutmeImg from "../assets/img/social/me.png";

const AboutMeButton = () => (
  <StyledLink
    href="https://about.me/nicolaslucero"
    target="_blank"
    rel="noreferrer"
  >
    <StyledImage src={aboutmeImg} alt="My linkedin" />
  </StyledLink>
);

export default AboutMeButton;

const StyledImage = styled.img`
  width: 30px;
`;

const StyledLink = styled.a`
  width: 30px;
`;
