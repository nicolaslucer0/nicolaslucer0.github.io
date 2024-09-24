import { useContext } from "react";
import { ThemeContext } from "../styles/Colors";

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
