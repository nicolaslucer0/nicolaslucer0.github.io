import styled from "styled-components";
import { GradientContainer, Lights, Lights2 } from "../styles/Grid";
import { AboutMe } from "./Aboutme";
import { Contact } from "./Contact";
import { Experience } from "./Experience/Experience";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { blue } from "../styles/Colors";
import { radius } from "../styles/Styles";
import { useEffect, useState } from "react";
import { IoTime } from "react-icons/io5";

const Time = styled.div`
  position: fixed;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  gap: 10px;
  bottom: 10px;
  right: 10px;
  padding: 10px 20px;
  border-radius: ${radius};
  color: white;
  font-weight: bold;
  width: 300px;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(6px) saturate(1.7);
  -webkit-backdrop-filter: blur(6px) saturate(1.7);
  box-shadow: 0 0 3px 0px #8f8f8f52;
  background-color: ${blue};
  @media (max-width: 768px) {
    left: 50%;
    translate: -50%;
  }
`;

export const Home = () => {
  const [hora, setHora] = useState(
    new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
  );
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(
        new Date().toLocaleString("es-AR", {
          timeZone: "America/Argentina/Buenos_Aires",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <Lights />
      <Lights2 />
      <GradientContainer />
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Contact />
      <Time>
        <IoTime />
        Buenos Aires time: {hora}
      </Time>
    </>
  );
};
