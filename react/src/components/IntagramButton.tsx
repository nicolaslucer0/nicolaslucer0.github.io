import styled from "styled-components";
import instagramImg from "../assets/img/instagram.png";

const InstagramButton = () => (
  <StyledLink
    href="https://www.instagram.com/bitacoradenico/"
    target="_blank"
    rel="noreferrer"
  >
    <StyledImage src={instagramImg} alt="My instagram" />
  </StyledLink>
);

export default InstagramButton;

const StyledImage = styled.img`
  width: 30px;
`;

const StyledLink = styled.a`
  width: 30px;
`;
