import { TasksContext } from "@contexts/index";
import { getAllTasks, setAllTasks } from "@utils/index";
import { useEffect, useLayoutEffect, useState } from "react";

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useLayoutEffect(() => {
        setTasks(getAllTasks());
    }, []);

    useEffect(() => {
        if(tasks.length > 0)
        setAllTasks(tasks);
    }, [tasks])

    return <TasksContext.Provider value={{ tasks, setTasks}}>{children}</TasksContext.Provider>;
}
