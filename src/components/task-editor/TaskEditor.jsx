import { createId } from "@utils/index";
import { useClickOutside, useTasks, useTaskEditorShown } from "@hooks/index";
import { Input, Button, ButtonPriority } from "@components/index";
import { useEffect, useState, useRef, useCallback } from "react";
import styles from "./taskEditor.module.css";
import { buttonsPriority } from "@constants/index";

export function TaskEditor() {
  const { taskEditorShown: shown, closeTaskEditor, currentTask: inEditTask, modeEdit } = useTaskEditorShown();
  const { tasks, setTasks } = useTasks();

  const [inputValue, setInputValue] = useState("");
  const [currentPriority, setCurrentPriority] = useState(1);
  const [isChanged, setIsChanged] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [saveButtonWarning, setSaveButtonWarning] = useState(false);

  const inputRef = useRef(null);
  const cancelButtonRef = useRef(null);
  const priorityCheckedRef = useRef(null);

  const taskEditorRef = useRef(null);
  const handleClickOutside = useCallback(() => {
    if (!isChanged) {
      closeTaskEditor();
    } else {
      setSaveButtonWarning(true);
      setTimeout(() => {
        setSaveButtonWarning(false);
      }, 1000);
    }
  }, [isChanged, closeTaskEditor]);
  useClickOutside(taskEditorRef, handleClickOutside, "data-ignore-taskeditor-click-outside");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleCreateTask = () => {
    const task = { id: createId(), title: inputValue.trim(), priority: currentPriority, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    setInputValue("");
    setCurrentPriority(1);
    closeTaskEditor();
    const updated = [...tasks, task];
    setTasks(updated);
  };

  const handleSaveChanges = () => {
    const task = { id: inEditTask.id, title: inputValue.trim(), priority: currentPriority, createdAt: inEditTask.createdAt, updatedAt: new Date().toISOString() };
    setInputValue("");
    setCurrentPriority(1);
    closeTaskEditor();
    const updated = tasks.map((item) => (item.id === task.id ? task : item));
    setTasks(updated);
  };

  const handleDeleteTask = () => {
    const id = inEditTask.id;
    setInputValue("");
    setCurrentPriority(1);
    closeTaskEditor();
    const updated = tasks.filter((item) => item.id !== id);
    setTasks(updated);
  };

  useEffect(() => {
    if (shown) {
      inputRef.current?.focus();
    }
    if (modeEdit) {
      setInputValue(inEditTask.title);
      setCurrentPriority(inEditTask.priority);
    } else {
      setInputValue("");
      setCurrentPriority(1);
    }
    if (shown && modeEdit) {
      setIsDelete(true);
    } else {
      setIsDelete(false);
    }
  }, [shown, modeEdit, inEditTask]);

  useEffect(() => {
    const trimmedInput = (inputValue ?? "");
    if (!trimmedInput || (inEditTask && inEditTask.title === trimmedInput && inEditTask.priority === currentPriority)) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [inEditTask, inputValue, currentPriority]);

  useEffect(() => {
    if (!inEditTask && currentPriority !== 1) {
      setIsChanged(true);
    }
  },[inEditTask, currentPriority]);

  const handleInputKeyDown = (e) => {
    if (e.key === "Tab" && !e.shiftKey && !inputValue.trim()) {
      e.preventDefault();
      priorityCheckedRef.current?.focus();
    }
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (modeEdit) {
        handleSaveChanges();
      } else {
        handleCreateTask();
      }
    }
  };

  return (
    <form className={styles.taskEditor} shown={shown.toString()} onSubmit={(e) => e.preventDefault()} ref={taskEditorRef}>
      <div className={styles.main}>
        <div className={styles.header}>
          <h2 className={styles.title}>{modeEdit ? `Редактирование` : `Создание задачи`}</h2>
          <Input value={inputValue} onChange={handleInputChange} inputRef={inputRef} onKeyDown={handleInputKeyDown} disabled={!shown} />
        </div>
        <div className={styles.priorityBox}>
          <span className={styles.label}>Приоритет</span>
          <ul className={styles.buttons}>
            {buttonsPriority.map((item) => {
              const isChecked = item.priority === currentPriority;
              return (
                <li className={styles.Item} key={`${item.iconName}-${item.priority}`}>
                  <ButtonPriority
                    iconName={item.iconName}
                    priority={item.priority}
                    currentPriority={currentPriority}
                    onCurrentPriority={setCurrentPriority}
                    disabled={!shown}
                    ref={isChecked ? priorityCheckedRef : null}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.footer}>
        <ul className={styles.buttons}>
          <li className={styles.item}>
            <Button
              className={saveButtonWarning && styles.saveButtonWarning}
              disabled={!isChanged}
              onButtonClick={modeEdit ? handleSaveChanges : handleCreateTask}
            >
              {modeEdit ? `Сохранить` : `Создать`}
            </Button>
          </li>
          <li className={styles.item}>
            <Button customize="secondary" onButtonClick={closeTaskEditor} ref={cancelButtonRef} disabled={!shown}>
              Отмена
            </Button>
          </li>
          {isDelete && (
            <li className={styles.item}>
              <Button className={styles.trash} iconName="trash" customize="primary" onButtonClick={handleDeleteTask} disabled={!isDelete} />
            </li>
          )}
        </ul>
      </div>
    </form>
  );
}
