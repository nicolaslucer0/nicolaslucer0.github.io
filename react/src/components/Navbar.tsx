import React from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { animated, config, useTransition } from "react-spring";
import styled from "styled-components";
import { ThemeSwitch } from "./ThemeSwitch";

const HamburgerButton = styled.div`
  font-size: 3rem;
  color: white;
  padding: 0;
  border: none;
  background: none;
  display: flex;
  z-index: 5;
  cursor: pointer;
  &.black {
    color: white;
  }
`;

const BlurBackground = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 2;
  height: 8vh;
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(150%) blur(20px);
  box-shadow: 0 0 6px 0 rgba(29, 29, 31, 0.4);
  background-color: rgba(29, 29, 31, 0.4);
  transition: 0.5s;
  &.white {
    background-color: transparent;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: none;
  }
`;

const StyledNavbar = styled(animated.nav)`
  position: relative;
  width: auto;
  top: 0;
  left: 0;
  z-index: 30;
  font-size: 1.4rem;
  height: 8vh;
  transition: 0.5s;
  background: transparent;
  padding: 0;
  margin: auto;
  padding: 0 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.white {
    background-color: transparent;
  }
`;

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  theme: string;
  toggleTheme: () => void;
};
export const Navbar = ({
  isOpen,
  setIsOpen,
  theme,
  toggleTheme,
}: NavbarProps) => {
  const openButton = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: "scale(0)",
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
    },
    leave: { opacity: 0, transform: "scale(0)" },
    config: config.stiff,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BlurBackground className={isOpen ? "white" : ""}>
      <StyledNavbar className={isOpen ? "white" : ""}>
        {openButton(({ opacity, transform }, isOpen) =>
          !isOpen ? (
            <animated.div
              key={1}
              style={{
                position: "absolute",
                opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
                transform: transform,
              }}
            >
              <HamburgerButton onClick={toggleMenu}>
                <MdMenu />
              </HamburgerButton>
            </animated.div>
          ) : (
            <animated.div
              key={2}
              style={{
                position: "absolute",
                opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
                transform: transform,
              }}
            >
              <HamburgerButton
                className={isOpen ? "black" : ""}
                onClick={toggleMenu}
              >
                <MdClose />
              </HamburgerButton>
            </animated.div>
          )
        )}
        <ThemeSwitch toggleTheme={toggleTheme} theme={theme} />
      </StyledNavbar>
    </BlurBackground>
  );
};
