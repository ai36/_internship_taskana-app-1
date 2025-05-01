import { TaskList } from "@components";
import styles from "./mainContainer.module.css";

export function MainContainer() {
    return (
        <main className={styles.main}>
            <div className={styles.containter}>
                <div className={styles.wrap}>
                    <h1 className={styles.title}>Входящие</h1>
                </div>
                <TaskList />
            </div>
        </main>
    );
}
