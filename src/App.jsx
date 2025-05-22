import { AppLayout } from "@layouts/index";
import { TaskEditorShownProvider, TasksProvider, ThemeProvider } from "@providers/index";

export function App() {
  return (
    <ThemeProvider>
      <TasksProvider>
        <TaskEditorShownProvider>
          <AppLayout />
        </TaskEditorShownProvider>
      </TasksProvider>
    </ThemeProvider>
  );
}
