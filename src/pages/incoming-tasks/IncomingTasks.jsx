import { MainContainer, Footer } from "@components/index";
import styles from "./incomingTasks.module.css";

export function IncomingTasks({ onTaskEditorShown, currentTask }) {
  return (
    <div className={styles.page}>
      <MainContainer onTaskEditorShown={onTaskEditorShown} currentTask={currentTask} />
      <Footer />
    </div>
  );
}
