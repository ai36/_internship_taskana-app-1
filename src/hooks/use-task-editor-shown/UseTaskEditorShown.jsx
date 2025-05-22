import { TaskEditorShownContext } from "@contexts/index";
import { useContext } from "react";

export const useTaskEditorShown = () => useContext(TaskEditorShownContext);
