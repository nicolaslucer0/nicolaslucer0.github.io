import styled from "styled-components";
import { blue } from "../styles/Colors";

const NavbarContainer = styled.nav`
  position: fixed;
  margin: auto;
  z-index: 10000;
  left: 50%;
  transform: translate(-50%);

  @media (max-width: 768px) {
    width: 100%;
    box-sizing: border-box;
    transform: none;
    left: 0;
    translate: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NavbarList = styled.ul`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  list-style-type: none;
  backdrop-filter: blur(6px) saturate(1.7);
  -webkit-backdrop-filter: blur(6px) saturate(1.7);
  border-radius: 50px;
  align-items: center;
  background-color: #e2e2e252;
  display: flex;
  justify-content: center;
  padding: 0 10px;
  margin: 10px auto;
  box-shadow: 0 0 3px 0px #8f8f8f52;
`;

const NavbarItem = styled.li`
  margin: 0;
  border-radius: 50px;
  transition: all 0.2s linear;
  padding: 10px;
  a {
    font-weight: light;
    font-size: 18px;
    padding: 20px;
    color: ${blue};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    a {
      font-weight: light;
      font-size: 12px;
      padding: 10px;
      color: ${blue};
      text-decoration: none;
    }
  }
`;

export const Navbar = () => (
  <NavbarContainer className={"white"}>
    <NavbarList>
      <NavbarItem>
        <a href="#about-me">Me</a>
      </NavbarItem>
      <NavbarItem>
        <a href="#experience">Experiences</a>
      </NavbarItem>
      <NavbarItem>
        <a href="#contact">Contact</a>
      </NavbarItem>
    </NavbarList>
  </NavbarContainer>
);
