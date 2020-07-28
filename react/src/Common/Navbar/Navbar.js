import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
  function handleChange() {
    props.onChange();
  }

  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  return (
    <>
      <CollapseMenu navbarState={props.navbarState} onChange={handleChange} />
      <NavBar className={`${props.navbarState ? "open" : ""} ${ !!props.scroll ? "sticky" : ""}`} style={barAnimation}>
        <FlexContainer className={`${props.navbarState ? "open" : ""} ${ !!props.scroll ? "sticky" : ""}`}>
        <Logo className={`${props.navbarState ? "open" : ""} ${!!props.scroll ? "sticky" : ""}`}>Nicolás</Logo>
          <NavList className={`${props.navbarState ? "open" : ""} ${!!props.scroll ? "sticky" : ""}`}>
            <a href="#about-me">About me</a>
            <a href="#experience">Experiences</a>
            {/* <Link to="#tecnologi">Proyectos</Link> */}
            <a href="#technologies">Technologies</a>
          </NavList>
          <Marquee className={`${props.navbarState ? "open" : ""} ${ !!props.scroll ? "sticky" : ""}`} 
          direction="right"><img alt="me just walking" src={require("../../Assets/img/me.gif")}/></Marquee>
          <BurgerWrapper>
            <BurgerMenu
              scrollClass={`${!!props.scroll ? "sticky" : ""}`}
              navbarState={props.navbarState}
              onChange={handleChange}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
    </>
  );
};

export default Navbar;
const Marquee = styled.marquee`{
  &:not(.sticky) {
    display: none;
  }
  &.open {
    display: none;
  }
  img {
    width: 2em;
  }
}`;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  font-size: 1.4rem;
  height: 8vh;
  transition: 1s;
  background: transparent;
  padding: 0;
  margin: auto;
  &.sticky.open {
    background: transparent;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  background: white;
  background: transparent;
  transition: 0.3s;
  &.sticky:not(.open) {
    background: white;
    justify-content: space-between;
  }
  &.sticky.open {
    background: transparent;
  }
  @media (max-width: 768px) {
    justify-content: flex-end;
    &.open {
      justify-content: space-between;
    }  
    &.sticky {
      justify-content: space-between;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
`;

const Logo = styled.h1`
{
  display: none;
  color: #001027;
  &.sticky {
    display:flex;
  }
  &.open {
    display:flex;
    color: white;
  }
}  

`;

const NavList = styled.ul`
   {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    &.open {
      display: none;
    }
    &.sticky {
      display: none;
    }
    a {
      margin: 0 1em;
      color: white;
      text-decoration: none;
      transition: 0.2s;
      &:hover {
        text-shadow: 3px -2px 0px #4f7dff;
        transform: scale(1.01);
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
