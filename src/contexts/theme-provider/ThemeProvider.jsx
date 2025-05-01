import { useState, useLayoutEffect } from "react";
import { ThemeContext } from "@contexts";

export const ThemeProvider = ({ children }) => {
    const usersTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || usersTheme;
    });

    useLayoutEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    const themeSwitcher = () => {
        const newTheme = theme === "dark" ? "light" : "dark";

        if (document.startViewTransition) {
            document.startViewTransition(() => {
                setTheme(newTheme);
                document.documentElement.dataset.theme = newTheme;
            });
        } else {
            setTheme(newTheme);
            document.documentElement.dataset.theme = newTheme;
        }
    };

    return <ThemeContext.Provider value={{ theme, themeSwitcher }}>{children}</ThemeContext.Provider>;
};
