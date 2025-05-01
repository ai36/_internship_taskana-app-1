import { Icon } from "@components";
import styles from "./taskItem.module.css";

export function TaskItem({ priority, children }) {
    return (
        <>
            <li className={styles.taskItem} data-priority={priority} tabIndex={0}>
                <div className={styles.task}>
                    <Icon iconName="priority" />
                    <p className={styles.text}>{children}</p>
                </div>
            </li>
        </>
    );
}
