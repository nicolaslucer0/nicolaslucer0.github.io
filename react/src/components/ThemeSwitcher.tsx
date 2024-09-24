import React, { useState } from "react";
import styled from "styled-components";
import { blue, Green } from "../styles/Colors";
import { useTheme } from "../hooks/useTheme";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${Green};
  }

  &:checked + ${Slider}::before {
    transform: translateX(26px);
  }
`;

const Emoji = styled.span<{ position: string; show: boolean }>`
  position: absolute;
  top: 5px;
  transition: opacity 0.5s ease;
  opacity: ${(props) => (props.show ? "1" : "0")};
  ${(props) => (props.position === "right" ? "right: 9px;" : "left: 8.5px;")}
`;

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
    toggleTheme();
  };

  return (
    <Switch>
      <Input type="checkbox" onChange={toggleSwitch} checked={isChecked} />
      <Slider>
        <Emoji position="left" show={!isChecked}>
          ☀️
        </Emoji>
        <Emoji position="right" show={isChecked}>
          🌙
        </Emoji>
      </Slider>
    </Switch>
  );
};

export default ThemeSwitcher;
