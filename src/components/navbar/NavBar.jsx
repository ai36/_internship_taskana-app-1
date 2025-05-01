import { NavBarLink } from "@components";
import styles from "./navBar.module.css";

export function NavBar() {
    return (
        <nav className={styles.navbar}>
            <NavBarLink/>
        </nav>
    );
}
