import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@hooks": "/src/hooks",
            "@assets": "/src/assets",
            "@components": "/src/components",
            "@pages": "/src/pages",
            "@layouts": "/src/layouts",
            "@contexts": "/src/contexts",
            "@utils": "/src/utils",
        },
    },
});
