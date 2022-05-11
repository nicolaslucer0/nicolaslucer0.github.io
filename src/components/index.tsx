import { useState } from "react";
import { AboutMe } from "./Aboutme";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { FullScreenMenu } from "./FullScreenMenu";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Separator } from "./Separator";
import { Technologies } from "./Technologies";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <>
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Header />
      <Separator />
      <AboutMe />
      <Experience />
      <Technologies />
      <Contact />
      <FullScreenMenu isOpen={isOpen} handleChange={setIsOpen} />
    </>
  );
};
