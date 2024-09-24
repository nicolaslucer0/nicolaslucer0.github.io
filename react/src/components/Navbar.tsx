// Title.tsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import { blue, ThemeProps, White } from "../styles/Colors";
import ThemeButton from "./ThemeSwitcher";
import { useTheme } from "../hooks/useTheme";

gsap.registerPlugin(ScrollTrigger); // Registramos el plugin de ScrollTrigger

const NavbarContainer = styled.nav`
  position: fixed;
  margin: auto;
  z-index: 10000;
  left: 50%;
  transform: translate(-50%);

  width: 35%;
  padding: 15px 0;
  transition: all 0.5s ease; // Para suavizar los cambios

  @media (max-width: 768px) {
    width: 100% !important;
    box-sizing: border-box;
    transform: none;
    left: 0;
    translate: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  border-radius: 50px;
  align-items: center;
  background-color: #e2e2e252;
  padding: 0 10px;
  margin: 10px auto;
  box-shadow: 0 0 3px 0px #8f8f8f52;
  backdrop-filter: blur(6px) saturate(1.7);
  -webkit-backdrop-filter: blur(6px) saturate(1.7);
`;

const NavbarItem = styled.li<ThemeProps>`
  margin: 0;
  border-radius: 50px;
  transition: all 0.2s linear;
  padding: 10px;
  a {
    font-weight: light;
    font-size: 18px;
    padding: 20px;
    color: ${(props) => (props.theme === "light" ? blue : White)};
    text-decoration: none;
    transition: transform 0.3s ease, border-bottom 0.3s ease;

    &:hover {
      transform: scale(1.1); // Efecto de zoom en hover
      border-bottom: 2px solid
        ${(props) => (props.theme === "light" ? blue : White)};
    }
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    a {
      font-weight: light;
      font-size: 12px;
      padding: 10px;
      color: ${blue};
      text-decoration: none;
    }
  }
`;

export const Navbar = () => {
  const { theme } = useTheme();
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Animación de entrada del navbar al cargar la página
    gsap.to(navbarRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power3.out",
    });

    // Animación al hacer scroll usando ScrollTrigger
    ScrollTrigger.create({
      trigger: document.body, // Detecta el scroll en el body
      start: "top top", // Empieza en la parte superior
      end: "+=500", // Cuando se scrollea hacia abajo
      onUpdate: (self) => {
        if (self.direction === 1) {
          // Cuando el usuario hace scroll hacia abajo
          gsap.to(navbarRef.current, {
            scale: 1, // Reduce el tamaño del navbar
            opacity: 1, // Lo hace más opaco
            duration: 0.2,
            translateY: -30,
            width: "100%",
          });
        } else {
          // Cuando el usuario scrollea hacia arriba
          gsap.to(navbarRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.2,
            translateY: 0,
            width: "35%",
          });
        }
      },
    });
  }, []);

  return (
    <NavbarContainer ref={navbarRef}>
      <NavbarList>
        <NavbarItem theme={theme}>
          <a href="#about-me">Me</a>
        </NavbarItem>
        <NavbarItem theme={theme}>
          <a href="#experience">Experiences</a>
        </NavbarItem>
        <NavbarItem theme={theme}>
          <a href="#contact">Contact</a>
        </NavbarItem>
        <NavbarItem theme={theme}>
          <ThemeButton />
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};
