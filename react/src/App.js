import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Common/Navbar/Navbar";
import Home from "./Common";
import NotFoundPage from "./Common/notFound.js";
const App = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const scroll = useHasScrolled(700);

  const handleChange = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <Router>
        <Navbar
          scroll={scroll}
          navbarState={navbarOpen}
          onChange={handleChange}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
};
export default App;

export const useHasScrolled = (distance = 10) => {
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
