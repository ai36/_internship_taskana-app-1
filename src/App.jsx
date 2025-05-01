import { AppLayout } from "@layouts";
import { ThemeProvider } from "@contexts";

export function App() {
    return (
        <ThemeProvider>
            <AppLayout />
        </ThemeProvider>
    );
}
