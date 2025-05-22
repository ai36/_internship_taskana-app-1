import { Icon } from "@components/index";
import styles from "./navBarLink.module.css";

export function NavBarLink({ iconName = "inbox", text = "Входящие" }) {
  return (
    <a className={styles.link} tabIndex="0">
      <div className={styles.label}>
        <Icon className={styles.icon} iconName={iconName} />
        <span>{text}</span>
      </div>
    </a>
  );
}
