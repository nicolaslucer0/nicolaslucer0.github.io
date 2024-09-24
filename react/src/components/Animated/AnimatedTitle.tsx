import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import { blue, ThemeProps, White } from "../../styles/Colors";

gsap.registerPlugin(ScrollTrigger);

const Title = styled.h1<ThemeProps>`
  font-size: 5rem;
  font-weight: 500;
  position: relative;
  font-weight: 200;
  letter-spacing: -4px;
  padding: 5px 10px;
  font-weight: bolder;
  color: ${(props) => (props.theme === "light" ? blue : "white")};
  margin: 0;

  @media (max-width: 768px) {
    width: 250px;
    font-size: 4rem;
    letter-spacing: -1px;
  }
`;

const Letter = styled.span`
  display: inline-block;
  opacity: 0;
`;

const Subtitle = styled.h2<ThemeProps>`
  color: ${(props) => (props.theme === "light" ? blue : White)};
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  filter: blur(5px);
  transform: scale(0.8);
`;

type AnimatedTitleProps = {
  theme: string;
};
const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ theme }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const letters = gsap.utils.toArray(titleRef.current!.children);

    gsap.fromTo(
      letters,
      { y: 50, opacity: 0, rotate: 45 },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "bounce.out",
      }
    );

    gsap.to(subtitleRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      duration: 1.5,
      delay: 1.5,
      ease: "power3.out",
    });
  }, []);
  const text = "Nicolás Lucero";
  const letters = text.split("");

  return (
    <>
      <Title ref={titleRef} theme={theme}>
        {letters.map((letter, index) => (
          <Letter key={index}>{letter === " " ? "\u00A0" : letter}</Letter>
        ))}
      </Title>
      <Subtitle ref={subtitleRef} theme={theme}>
        Sofware developer.
      </Subtitle>
    </>
  );
};

export default AnimatedTitle;
