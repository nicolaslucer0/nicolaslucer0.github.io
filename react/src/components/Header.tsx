import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import me from "../assets/img/me_glass.png";
import { useTheme } from "../hooks/useTheme";
import { blue, Green, ThemeProps } from "../styles/Colors";
import AnimatedTitle from "./Animated/AnimatedTitle";
import DownloadCVButton from "./DownloadCVButton";
import InstagramButton from "./IntagramButton";
import LinkedinButton from "./LinkedinButton";
import AboutMeButton from "./AboutMeButton";
export const Header = () => {
  const { theme } = useTheme();
  const imageRef = useRef<HTMLImageElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: -200, opacity: 0, scale: 0.8 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      textContainerRef.current,
      { x: 200, opacity: 0, scale: 0.8 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <HeaderContainer>
      <FlexContainer>
        <TextContainer ref={textContainerRef}>
          <AnimatedTitle theme={theme} />
          <NetworkContainer>
            <AboutMeButton />
            <InstagramButton />
            <LinkedinButton />
            <DownloadCVButton />
          </NetworkContainer>
        </TextContainer>
        <Image ref={imageRef} src={me} alt="Me with glasses." theme={theme} />
      </FlexContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  height: 100vh;
  z-index: 3;
`;
const NetworkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const FlexContainer = styled.div`
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    height: auto;
  }
`;

const Image = styled.img<ThemeProps>`
  background: ${(props) => (props.theme === "light" ? blue : Green)};
  box-shadow: 0px 0px 20px 10px #00000017;
  border-radius: 4rem;
  @media (max-width: 768px) {
    border-radius: 100%;
  }
`;

const TextContainer = styled.div`
  color: white;
  display: flex;
  font-size: 20px;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  margin: 5em 0 2em 0;
`;
