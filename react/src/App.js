import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Common/Footer";
import Home from "./Common/Home";

import Strapi from "strapi-sdk-javascript/build/main";
import Navbar from "./Common/Navbar/Navbar";
const strapi = new Strapi("http://localhost:1337");

const App = () => {
  const [users, setUsers] = useState([]);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const scroll = useHasScrolled(250);

  const handleChange = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    async function getUsers() {
      try {
        const users = await strapi.getEntries("users");
        setUsers({ users });
      } catch (err) {
        console.log(err);
      }
      console.log(users);
    }

    getUsers();
  }, [users]);

  return (
    <>
      <section>
        {users.map((user) => {
          return (
            <article>
              <div>Title: {user.username}</div>
            </article>
          );
        })}
      </section>

      <Router>
      <Navbar scroll={scroll} navbarState={navbarOpen} onChange={handleChange} />
        <Switch>
          <Route exact path="/" component={Home} />
          {/*<Route component={NotFoundPage} />*/}
        </Switch>
        {/*<GoogleAnalytics />*/}
      <Footer />
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
