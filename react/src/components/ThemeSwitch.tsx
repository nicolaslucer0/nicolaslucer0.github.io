import React from "react";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";

const StyledButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  outline: none;
  z-index: 99999;
  position: absolute;
  right: 30px;
`;

const StyledIndicator = styled(animated.span)`
  font-size: 1.2rem;
`;
type ThemeSwitchProps = {
  theme: string;
  toggleTheme: () => void;
};
export const ThemeSwitch = ({ theme, toggleTheme }: ThemeSwitchProps) => {
  const getTransform = (item: string) =>
    item === "light" ? "translateY(50px)" : "translateY(-50px)";

  const transitions = useTransition(theme, {
    from: {
      opacity: 0,
      transform: getTransform(theme),
    },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: {
      opacity: 0,
      transform: getTransform(theme),
    },
  });

  return (
    <StyledButton onClick={toggleTheme}>
      {transitions(({ opacity, transform }, theme) =>
        theme === "dark" ? (
          <StyledIndicator
            style={{
              right: 0,
              position: "absolute",
              opacity: opacity,
              transform: transform,
            }}
            key={1}
          >
            🌙
          </StyledIndicator>
        ) : (
          <StyledIndicator
            style={{
              right: 0,
              position: "absolute",
              opacity: opacity,
              transform: transform,
            }}
            key={2}
          >
            ☀️
          </StyledIndicator>
        )
      )}
    </StyledButton>
  );
};
