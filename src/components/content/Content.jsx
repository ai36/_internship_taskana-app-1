import { NavBar, SideBar } from "@components/index";
import { IncomingTasks } from "@pages/index";
import styles from "./content.module.css";

export function Content({ onTaskEditorShown, currentTask }) {
  return (
    <section className={styles.content}>
      <NavBar />
      <IncomingTasks onTaskEditorShown={onTaskEditorShown} currentTask={currentTask} />
      <SideBar />
    </section>
  );
}
