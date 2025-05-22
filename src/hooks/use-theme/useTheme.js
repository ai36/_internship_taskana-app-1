import { ThemeContext } from "@contexts/index";
import { useContext } from "react";

export const useTheme = () => useContext(ThemeContext);
