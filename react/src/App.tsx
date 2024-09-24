import { useState } from "react";
import "./App.css";
import { Home } from "./components";
import { ThemeContext } from "./styles/Colors";
function App() {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme ?? "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Home />;
    </ThemeContext.Provider>
  );
}

export default App;
