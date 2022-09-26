import { animated, config, useTransition } from "react-spring";
import styled from "styled-components";

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

type FullScreenMenuProps = {
  isOpen: boolean;
  handleChange: (isOpen: boolean) => void;
};

export const FullScreenMenu = ({
  isOpen,
  handleChange,
}: FullScreenMenuProps) => {
  const fullscreenMenu = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: "scale(0.80)",
      backgroundImage: "linear-gradient(120deg, #ffffff 0%, #ffffff 100%)",
      display: "none",
      visibility: "hidden",
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      backgroundImage: "linear-gradient(120deg, #000000 0%, #004ba0 100%)",
      position: "absolute",
      maxHeight: "100vh",
      display: "flex",
      visibility: "visible",
    },
    leave: {
      opacity: 0,
      transform: "scale(0.80)",
      backgroundImage: "transparent",
      width: "0",
      display: "none",
      visibility: "hidden",
    },
    config: config.gentle,
  });
  return (
    <div>
      {fullscreenMenu(
        ({ opacity, transform, backgroundImage, visibility }, isOpen) =>
          !!isOpen && (
            <>
              <animated.div
                key={1}
                style={{
                  position: "fixed",
                  top: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100vh",
                  zIndex: 3,
                  backgroundImage: backgroundImage,
                  transform: transform,
                  display: "flex",
                  background: "white",
                  visibility: visibility as any,
                  opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
                }}
              >
                <NavLinks>
                  <a onClick={() => handleChange(false)} href="#about-me">
                    About me
                  </a>
                  <a onClick={() => handleChange(false)} href="#experience">
                    Experiences
                  </a>
                  <a onClick={() => handleChange(false)} href="#technologies">
                    Technologies
                  </a>
                  <a onClick={() => handleChange(false)} href="#contact">
                    How to contact me?
                  </a>
                </NavLinks>
              </animated.div>
            </>
          )
      )}
    </div>
  );
};
