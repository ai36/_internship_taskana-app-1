import { Icon, Button, ThemeSwitcher } from "@components";
import styles from "./header.module.css";

export function Header({ onTaskEditorShown, taskEditorShown }) {
    return (
        <header className={styles.header}>
            <Icon iconName={"logo"} />
            <Button iconName="plus" customize="base" onButtonClick={onTaskEditorShown} disabled={taskEditorShown}>Создать</Button>
            <ThemeSwitcher />
        </header>
    );
}
