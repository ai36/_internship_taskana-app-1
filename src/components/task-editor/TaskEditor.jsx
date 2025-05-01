import { createTask, createId } from "@utils";
import { Input, Button, ButtonPriority } from "@components";
import { useEffect, useState, useRef } from "react";
import styles from "./taskEditor.module.css";

const buttonsPriority = [
    {
        iconName: "minus",
        priority: 1,
    },
    {
        iconName: "arrowtop",
        priority: 2,
    },
    {
        iconName: "chevron",
        priority: 3,
    },
];

export function TaskEditor({ shown, onTaskEditorClose, onTaskCreated }) {
    const [inputValue, setInputValue] = useState("");
    const [currentPriority, setCurrentPriority] = useState(1);

    const inputRef = useRef(null);
    const cancelButtonRef = useRef(null);

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleCreateTask = () => {
        const task = { id: createId(), title: inputValue, priority: currentPriority };
        createTask(task);
        setInputValue("");
        setCurrentPriority(1);
        onTaskEditorClose();
        if (onTaskCreated) onTaskCreated();
    };

    useEffect(() => {
        if (shown) {
            inputRef.current?.focus();
        }
        setInputValue("");
        setCurrentPriority(1);
    }, [shown]);

    const handleInputKeyDown = (e) => {
        if (e.key === "Tab" && !e.shiftKey && !inputValue.trim()) {
            e.preventDefault();
            cancelButtonRef.current?.focus();
        }
        if (e.key === "Enter" && inputValue.trim()) {
            e.preventDefault();
            handleCreateTask();
        }
    };

    return (
        <form className={styles.taskEditor} shown={shown.toString()} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.main}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Создание задачи</h2>
                    <Input value={inputValue} onChange={handleInputChange} inputRef={inputRef} onKeyDown={handleInputKeyDown} />
                </div>
                <div className={styles.priorityBox}>
                    <span className={styles.label}>Приоритет</span>
                    <ul className={styles.buttons}>
                        {buttonsPriority.map((item) => {
                            return (
                                <li className={styles.Item} key={`${item.iconName}-${item.priority}`}>
                                    <ButtonPriority
                                        iconName={item.iconName}
                                        priority={item.priority}
                                        currentPriority={currentPriority}
                                        onCurrentPriority={setCurrentPriority}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className={styles.footer}>
                <ul className={styles.buttons}>
                    <li className={styles.Item}>
                        <Button disabled={!inputValue.trim()} onButtonClick={handleCreateTask}>
                            Создать
                        </Button>
                    </li>
                    <li className={styles.Item}>
                        <Button customize="secondary" onButtonClick={onTaskEditorClose} ref={cancelButtonRef}>
                            Отмена
                        </Button>
                    </li>
                </ul>
            </div>
        </form>
    );
}
