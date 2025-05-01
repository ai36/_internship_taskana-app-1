import { Icon } from "@components";
import { useTheme } from "@hooks";
import styles from "./themeSwitcher.module.css";

export function ThemeSwitcher() {
    const { themeSwitcher } = useTheme();

    return (
        <button className={styles.switcher} onClick={themeSwitcher} aria-label="Сменить оформление приложения">
            <Icon iconName="sun" />
            <Icon iconName="moon" />
        </button>
    );
}
