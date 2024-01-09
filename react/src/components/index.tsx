import { GradientContainer } from "../styles/Grid";
import { AboutMe } from "./Aboutme";
import { Contact } from "./Contact";
import { Experience } from "./Experience/Experience";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <>
      <GradientContainer />
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Contact />
    </>
  );
};
