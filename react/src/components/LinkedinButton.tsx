import styled from "styled-components";
import linkedinImg from "../assets/img/linkedin.png";

const LinkedinButton = () => (
  <StyledLink
    href="https://www.linkedin.com/in/nicolaslucer0/"
    target="_blank"
    rel="noreferrer"
  >
    <StyledImage src={linkedinImg} alt="My linkedin" />
  </StyledLink>
);

export default LinkedinButton;

const StyledImage = styled.img`
  width: 30px;
`;

const StyledLink = styled.a`
  width: 30px;
`;
