import { useState } from "react";
import { AboutMe } from "./Aboutme";
import { Contact } from "./Contact";
import { Experience } from "./Experience/Experience";
import { FullScreenMenu } from "./FullScreenMenu";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Separator } from "./Separator";
import { Technologies } from "./Technologies/Technologies";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";
  const toggleTheme = () => {
    document.body.classList.remove("dark");
    document.body.classList.remove("light");
    setTheme(isDark ? "light" : "dark");
    document.body.classList.add(isDark ? "light" : "dark");
  };

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
      <AboutMe theme={theme} />
      <Experience theme={theme} />
      <Technologies theme={theme} />
      <Contact theme={theme} />
      <FullScreenMenu isOpen={isOpen} handleChange={setIsOpen} />
    </>
  );
};
