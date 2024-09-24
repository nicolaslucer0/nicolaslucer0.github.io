import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  blue,
  Green,
  ThemeProps,
  transparentWhite,
  White,
} from "../../styles/Colors";
import { radius } from "../../styles/Styles";

gsap.registerPlugin(ScrollTrigger);
type TimelineCardProps = {
  image: any;
  title: string;
  position: string;
  classname: string;
  description: string;
  theme: string;
};
export const TimelineCard = ({
  image,
  title,
  classname,
  theme,
  position,
  description,
}: TimelineCardProps) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: position === "left" ? -100 : 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [position]);

  return (
    <Card ref={cardRef} theme={theme}>
      <Image src={image} alt={title} theme={theme} className={classname} />
      <Title theme={theme}>{title}</Title>
      <Position theme={theme}>{position}</Position>
      <Description theme={theme}>{description}</Description>
    </Card>
  );
};

const Card = styled.div<ThemeProps>`
  background: ${(props) => (props.theme === "light" ? White : Green)};
  width: 100%;
  padding: 2rem;
  opacity: 0;
  transform: translateY(50px);
  margin-bottom: 20px;
  background: ${(props) =>
    props.theme === "light" ? transparentWhite : Green};
  border-radius: ${radius};
  backdrop-filter: blur(6px) saturate(1.7);
  -webkit-backdrop-filter: blur(6px) saturate(1.7);
`;

const Title = styled.h3<ThemeProps>`
  font-size: 1.5em;
  color: ${(props) => (props.theme === "light" ? blue : White)};
  margin: 0.5em 0;
`;

const Position = styled.p<ThemeProps>`
  font-size: 1.2em;
  color: ${(props) => (props.theme === "light" ? blue : White)};
  font-weight: bold;
`;

const Description = styled.p<ThemeProps>`
  font-size: 1em;
  color: ${(props) => (props.theme === "light" ? blue : White)};
`;

const Image = styled.img<ThemeProps>`
  width: 90px;

  &.sjt {
    width: 60px;
    height: 60px;
  }
`;
