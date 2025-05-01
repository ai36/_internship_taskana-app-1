import { NavBar, SideBar } from "@components";
import { IncomingTasks } from "@pages";
import styles from "./content.module.css";

export function Content() {
    return (
        <section className={styles.content}>
            <NavBar />
            <IncomingTasks />
            <SideBar />
        </section>
    );
}
