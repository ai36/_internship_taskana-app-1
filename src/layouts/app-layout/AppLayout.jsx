import { Header, Content, TaskEditor } from "@components";
import { useState } from "react";
import styles from "./appLayout.module.css";

export function AppLayout() {
    const [taskEditorShown, setTaskEditorShown] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleTaskCreated = () => {
        setRefreshKey(prev => prev + 1);
    };

    return (
        <div className={styles.applayout}>
            <Header onTaskEditorShown={() => {setTaskEditorShown(true)}} taskEditorShown={taskEditorShown} />
            <Content key={refreshKey} />
            <TaskEditor shown={taskEditorShown} onTaskEditorClose={() => {setTaskEditorShown(false)}} taskEditorShown={taskEditorShown} onTaskCreated={handleTaskCreated}/>
        </div>
    );
}
