import { useState } from "react";
import styled from "styled-components";

type StepperProps = {
  startOn: number;
  steps: any[];
  theme: string;
};
export const Stepper = ({ steps, startOn, theme }: StepperProps) => {
  const [activeStep, setActiveStep] = useState(startOn);
  const stepsNumber = getStepsBasedOnQuantity(steps);
  return (
    <>
      {renderSteps(stepsNumber, setActiveStep, theme, activeStep)}
      {renderStepContent(steps, activeStep)}
    </>
  );
};

const renderSteps = (
  stepsNumber: any[],
  setActiveStep: (step: number) => void,
  theme: string,
  activeStep: number
) => (
  <Wrapper className={theme}>
    <Container className={theme}>
      {stepsNumber.map((step) => (
        <Link
          key={step.index}
          className={`${theme} ${activeStep === step.index ? "active" : ""}`}
          onClick={() => setActiveStep(step.index)}
        >
          {step.year}
        </Link>
      ))}
    </Container>
  </Wrapper>
);

const renderStepContent = (steps: any[], activeStep: number) => {
  if (activeStep === 0) return <>{steps[0]}</>;
  if (activeStep === 1) return <>{steps[1]}</>;
  if (activeStep === 2) return <>{steps[2]}</>;
  if (activeStep === 3) return <>{steps[3]}</>;
};

const getStepsBasedOnQuantity = (steps: any[]) => {
  return [
    { index: 0, year: "mar 2014" },
    { index: 1, year: "ago 2017" },
    { index: 2, year: "sept 2019" },
    { index: 3, year: "may 2020" },
  ];
};

const Wrapper = styled.div`
  padding: 50px;
  text-align: center;
  font-family: sans-serif;
  width: 90%;
  margin: auto;
  box-sizing: border-box;
`;

const Container = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;

  &.dark {
    border-top: 2px solid #fff;
  }
  &.light {
    border-top: 2px solid #000;
  }
`;

const Link = styled.li`
  position: relative;
  margin-top: 10px;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 15px;
  transition: 0.3s;
  &.light {
    color: black;
  }
  &.dark {
    color: white;
  }

  &:first-child {
    margin-left: -55px;
  }

  &:last-child {
    margin-right: -55px;
  }

  &::after {
    content: "";
    width: 10px;
    height: 10px;

    position: absolute;
    border-radius: 10px;
    top: -18px;
    left: 50%;
    transform: translatex(-50%);

    background: #fff;
    border: 2px solid black;
  }

  &:hover {
    transform: scale(1.2);
  }
  &.active::after,
  &:hover::after {
    background: #8b008b;
  }
`;
