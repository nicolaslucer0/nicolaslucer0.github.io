import React, { useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./components";
import { NotFound } from "./components/NotFound";
function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleChange = () => {
    setNavbarOpen(!navbarOpen);
  };

  const useHasScrolled = (distance = 10) => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        const scrollCheck = window.scrollY >= distance;
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck);
        }
      };

      document.addEventListener("scroll", onScroll);

      return () => {
        document.removeEventListener("scroll", onScroll);
      };
    }, [scroll, setScroll, distance]);

    return scroll;
  };

  const scroll = useHasScrolled(700);

  return (
    <BrowserRouter>
      {/* <Navbar
          scroll={scroll}
          navbarState={navbarOpen}
          onChange={handleChange}
        /> */}
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
