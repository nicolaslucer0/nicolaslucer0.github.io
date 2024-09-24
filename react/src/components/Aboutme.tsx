// AboutMe.tsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importar ScrollTrigger
import styled from "styled-components";
import me from "../assets/img/me_snow.jpg";
import { Padding } from "../styles/Grid";
import { DescriptionText, DescriptionTitle, radius } from "../styles/Styles";
import { useTheme } from "../hooks/useTheme";
import { Green, ThemeProps, transparentWhite } from "../styles/Colors";

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const AboutMe = () => {
  const { theme } = useTheme();
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Animación del texto, activada cuando es visible
    const paragraphs = gsap.utils.toArray(textRef.current!.children);
    gsap.fromTo(
      paragraphs,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current, // Elemento que dispara la animación
          start: "top 80%", // Cuando el 80% del componente entra en la pantalla
          toggleActions: "play none none none", // Solo se reproduce una vez
        },
      }
    );

    // Animación de la imagen, activada cuando es visible
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8, rotationY: 45 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current, // Activado por la imagen
          start: "top 80%",
          toggleActions: "play none none none", // Solo se reproduce una vez
        },
      }
    );
  }, []);

  return (
    <Padding theme={theme}>
      <FlexContainerRow id="about-me" theme={theme}>
        <DescriptionSection ref={textRef}>
          <DescriptionTitle theme={theme}>
            I'm Nico a <u>software developer</u> currently working in MODO,
            taking client ideas to next level, using agile methodologies and
            good practices in Buenos Aires, Argentina. 🚀
          </DescriptionTitle>
          <DescriptionText theme={theme}>
            I've spent the past 7 years working across different areas of
            software development; making my career as a full stack developer. I
            love turning complex problems into elegant, user-friendly solutions.
          </DescriptionText>
          <DescriptionText theme={theme}>
            I believe in not just writing code, but in thinking deeply about the
            products I help to build, ensuring they're as enjoyable to use as
            they were for me to create.
          </DescriptionText>
        </DescriptionSection>
        <PictureSection>
          <AboutMeImage ref={imageRef} src={me} alt="Me in the snow." />
        </PictureSection>
      </FlexContainerRow>
    </Padding>
  );
};

export default AboutMe;

const AboutMeImage = styled.img`
  width: 100%;
  border-radius: ${radius};
  object-fit: cover;
  &.light {
    box-shadow: 0 0 14px 0 #a7a7a7;
  }
`;

const PictureSection = styled.div`
  width: 90%;
  border-radius: ${radius};
  margin-left: 4rem;
  z-index: 5;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-left: 0;
  }
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 5;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin: auto;
    height: auto;
  }
`;

export const FlexContainerRow = styled.div<ThemeProps>`
  display: flex;
  margin: auto;
  border-radius: 2rem;
  z-index: 5;
  padding: 3rem 2rem;
  background: ${(props) =>
    props.theme === "light" ? transparentWhite : Green};
  backdrop-filter: blur(6px) saturate(1.7);
  -webkit-backdrop-filter: blur(6px) saturate(1.7);
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
