import { TasksContext } from "@contexts/index";
import { useContext } from "react";

export const useTasks = () => useContext(TasksContext);
