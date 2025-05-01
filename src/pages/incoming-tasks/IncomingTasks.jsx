import { MainContainer, Footer } from "@components";
import styles from "./incomingTasks.module.css";

export function IncomingTasks() {
    return (
        <div className={styles.page}>
            <MainContainer />
            <Footer />
        </div>
    );
}
