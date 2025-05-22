import { useState, useLayoutEffect } from "react";
import { ThemeContext } from "@contexts/index";
import { themes } from "@constants/index";

export const ThemeProvider = ({ children }) => {
  const usersTheme = window.matchMedia(`(prefers-color-scheme: ${themes.dark})`).matches ? themes.dark : themes.light;

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || usersTheme;
  });

  useLayoutEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const themeSwitcher = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  return <ThemeContext.Provider value={{ theme, themeSwitcher }}>{children}</ThemeContext.Provider>;
};
