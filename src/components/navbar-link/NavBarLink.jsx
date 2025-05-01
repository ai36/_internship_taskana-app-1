import { Icon } from "@components";
import styles from "./navBarLink.module.css";

export function NavBarLink({ iconName, text}) {
    return (
        <a className={styles.button} href="/">
            <div className={styles.label}>
                <Icon className={styles.icon} iconName={iconName || "inbox"} />
                <span>{text || "Входящие"}</span>
            </div>
        </a>
    );
}
