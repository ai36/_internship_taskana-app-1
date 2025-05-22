import { Dropdown, TaskList } from "@components/index";
import styles from "./mainContainer.module.css";
import { useState, useEffect, useRef } from "react";

export function MainContainer({ onTaskEditorShown, currentTask }) {
  const parentRef = useRef(null);
  const [parentHeight, setParentHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (parentRef.current) {
        setParentHeight(parentRef.current.offsetHeight);
      }
    };
    updateHeight();
    const resizeObserver = new ResizeObserver(() => updateHeight());
    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <main className={styles.main} ref={parentRef}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>Входящие</h1>
          <Dropdown maxHeight={parentHeight - 80} />
        </div>
        <TaskList onTaskEditorShown={onTaskEditorShown} currentTask={currentTask} />
      </div>
    </main>
  );
}
