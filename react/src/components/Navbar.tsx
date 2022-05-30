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

const StyledNavbar = styled(animated.nav)`
  position: relative;
  width: 100%;
  z-index: 30;
  font-size: 1.4rem;
  margin: auto;
  padding: 0 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  position: fixed;
  height: 8vh;
  background: linear-gradient(180deg, #00000078, transparent);
  transition: 0.5s;
  box-sizing: border-box;

  &.white {
    background-color: transparent;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: none;
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
  );
};
