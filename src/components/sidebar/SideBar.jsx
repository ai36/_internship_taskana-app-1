import { Statistic } from "@components/index";
import styles from "./sideBar.module.css";

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <Statistic />
    </aside>
  );
}
