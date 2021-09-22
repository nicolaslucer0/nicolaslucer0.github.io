import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });
  const { closed } = useSpring({ closed: props.navbarState ? 1 : 0 });

  function handleChange() {
    props.onChange();
  }

  return (
    <CollapseWrapper
      className={!!props.navbarState ? "show" : "hide"}
      style={{
        transform: open
          .interpolate({ range: [0, 0.2, 0.3, 1], output: [0, -20, 0, -200] })
          .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        close: closed
          .interpolate({ range: [1, 0.5, 0], output: [-200, 0, -20, 0] })
          .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
      }}
    >
      <NavLinks>
        <a onClick={handleChange} href="#about-me">
          About me
        </a>
        <a onClick={handleChange} href="#experience">
          Experiences
        </a>
        <a onClick={handleChange} href="#technologies">
          Technologies
        </a>
        <a onClick={handleChange} href="#contact">
          How to contact me?
        </a>
      </NavLinks>
    </CollapseWrapper>
  );
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #001027;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 2;

  &.hide {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  transition: 0.3s;
  align-items: center;
  & a {
    transition: all 300ms linear 0s;
    font-size: 2rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
