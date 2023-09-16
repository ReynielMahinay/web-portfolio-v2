import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Add 'framer-motion' to the list of external dependencies
      external: ["framer-motion"],
    },
  },
});
