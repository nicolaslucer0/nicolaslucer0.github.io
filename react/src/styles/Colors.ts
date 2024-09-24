import { createContext } from "react";

export const White = "white";
export const Black = "#000829";
export const Green = "#285148";
export const Brown = "#22110e";
export const blue = "#006687";
export const violet = "rgba(111, 20, 154, 1)";
export const background = "hsl(202.26deg 100% 94.71%) 100%";
export const transparentWhite = "#ffffff96";

export type ThemeColors = {
  background: string;
  text: string;
};

type ThemeKey = "light" | "dark";

export const themeColors: Record<ThemeKey, ThemeColors> = {
  light: {
    background: "#fff",
    text: "#333",
  },
  dark: {
    background: "#333",
    text: "#fff",
  },
};

export const ThemeContext = createContext({
  theme: "light", // Valor inicial del tema
  toggleTheme: () => {}, // Función vacía como marcador de posición
});

export type ThemeProps = {
  theme: string;
};
