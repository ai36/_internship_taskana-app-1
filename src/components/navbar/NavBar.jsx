import { NavBarLink } from "@components/index";
import styles from "./navBar.module.css";

export function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.linkList}>
        <li className={styles.linkItem}>
          <NavBarLink />
        </li>
      </ul>
    </nav>
  );
}
