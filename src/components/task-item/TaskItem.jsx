import { Button, Icon } from "@components/index";
import styles from "./taskItem.module.css";
import { useTaskEditorShown } from "@hooks/index";

export function TaskItem({ task, currentTask }) {
  const { openTaskEditorInEditMode } = useTaskEditorShown();

  const isEdit = task.id === currentTask?.id;

  return (
    <>
      <li className={`${styles.taskItem} ${isEdit ? styles.isEdit : ""}`} data-priority={task.priority} tabIndex={0}>
        <div className={styles.task}>
          <Icon iconName="priority" fill="currentColor" />
          <p className={styles.text}>{task.title}</p>
          <Button className={styles.editButton} iconName="edit" onButtonClick={() => openTaskEditorInEditMode(task)} data-ignore-taskeditor-click-outside="true" />
        </div>
      </li>
    </>
  );
}
