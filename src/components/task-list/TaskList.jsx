import { Illustration, TaskItem } from "@components/index";
import styles from "./taskList.module.css";
import { useTasks } from '@hooks/index';

export function TaskList({ onTaskEditorShown, currentTask }) {
  const { tasks } = useTasks();

  return (
    <>
      {tasks.length === 0 ? (
        <section className={styles.emptyList}>
          <div className={styles.text}>
            <h2 className={styles.title}>Все твои задачи организованы как надо</h2>
            <p className={styles.desc}>Отличная работа! Ты большой молодец!</p>
          </div>
          <Illustration className={styles.pic} picName="emptytask" />
        </section>
      ) : (
        <section className={styles.section}>
          <ul className={styles.taskList}>
            {tasks.map((task) => 
              <TaskItem key={task.id} onTaskEditorShown={onTaskEditorShown} task={task} currentTask={currentTask} />
            )}
          </ul>
        </section>
      )}
    </>
  );
}
