import React from "react";
import Header from "./header";
import AboutMe from "./aboutme";
import Technologies from "./technologies";
import Experience from "./experience";

const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Experience />
      <Technologies />
      {/* <Projects /> */}
    </>
  );
};

export default Home;
