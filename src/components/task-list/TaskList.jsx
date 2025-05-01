import { getAllTasks } from "@utils";
import { Illustration, TaskItem } from "@components";
import { useState, useEffect } from "react";
import styles from "./taskList.module.css";

export function TaskList() {
    const [taskanaTasks, setTaskanaTasks] = useState(getAllTasks());

    useEffect(() => {
        setTaskanaTasks(getAllTasks());
    }, []);

    return (
        <>
            {getAllTasks().length === 0 ? (
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
                        {taskanaTasks.map((task) => (
                            <TaskItem key={task.id} priority={task.priority}>
                                {task.title}
                            </TaskItem>
                        ))}
                    </ul>
                </section>
            )}
        </>
    );
}
