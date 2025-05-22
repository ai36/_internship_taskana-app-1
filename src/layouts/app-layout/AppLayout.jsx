import { Header, Content, TaskEditor } from "@components/index";
import styles from "./appLayout.module.css";

export function AppLayout() {
  return (
    <div className={styles.applayout}>
      <Header />
      <Content />
      <TaskEditor />
    </div>
  );
}