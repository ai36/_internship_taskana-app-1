import { TaskEditorShownContext } from "@contexts/index";
import { useState } from "react";

export const TaskEditorShownProvider = ({ children }) => {
  const [taskEditorShown, setTaskEditorShown] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [modeEdit, setModeEdit] = useState(false);

  const openTaskEditor = () => {
    setTaskEditorShown(true);
    setModeEdit(false);
    setCurrentTask(null);
  };

  const openTaskEditorInEditMode = (task) => {
    setTaskEditorShown(true);
    setModeEdit(true);
    setCurrentTask(task);
  };

  const closeTaskEditor = () => {
    setTaskEditorShown(false);
    setCurrentTask(null);
    setModeEdit(false);
  };

  return (
    <TaskEditorShownContext.Provider
      value={{
        taskEditorShown,
        currentTask,
        modeEdit,
        openTaskEditor,
        openTaskEditorInEditMode,
        closeTaskEditor,
      }}
    >
      {children}
    </TaskEditorShownContext.Provider>
  );
};
