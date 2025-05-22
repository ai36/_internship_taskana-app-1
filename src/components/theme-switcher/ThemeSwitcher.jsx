import { Icon } from "@components/index";
import { useTheme } from "@hooks/index";
import styles from "./themeSwitcher.module.css";
import { themes } from "@constants/themes";

export function ThemeSwitcher() {
  const { theme, themeSwitcher } = useTheme();

  return (
    <button className={styles.switcher} onClick={themeSwitcher} aria-label={theme === themes.light ? "Сменить тему на темную" : "Сменить тему на светлую"} data-ignore-taskeditor-click-outside="true">
      <Icon iconName="sun" />
      <Icon iconName="moon" />
    </button>
  );
}
