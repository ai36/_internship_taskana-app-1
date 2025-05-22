import { Icon, Button, ThemeSwitcher } from "@components/index";
import styles from "./header.module.css";
import { useTaskEditorShown } from "@hooks/index";

export function Header() {
  const { openTaskEditor } = useTaskEditorShown();

  return (
    <header className={styles.header}>
      <Icon iconName={"logo"} />
      <Button iconName="plus" customize="base" onButtonClick={openTaskEditor} data-ignore-taskeditor-click-outside="true">
        Создать
      </Button>
      <ThemeSwitcher />
    </header>
  );
}
