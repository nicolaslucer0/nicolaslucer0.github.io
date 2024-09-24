import { useTheme } from "../hooks/useTheme";

import { Lights } from "../styles/Grid";
import { AboutMe } from "./Aboutme";
import { Contact } from "./Contact";
import { Experience } from "./Experience/Experience";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export const Home = () => {
  const { theme } = useTheme();

  return (
    <div style={{ overflowY: "hidden" }}>
      <Lights theme={theme} />
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Contact />
    </div>
  );
};
