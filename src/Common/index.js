import React from "react";
import Header from "./header";
import AboutMe from "./aboutme";
import Experience from "./experience";
import Technologies from "./technologies";
import Contact from "./contact";
import Separator from "./Separator";

const Home = () => {
  return (
    <>
      <Header />
      <Separator />
      <AboutMe />
      <Experience />
      <Technologies />
      <Contact />
    </>
  );
};

export default Home;
