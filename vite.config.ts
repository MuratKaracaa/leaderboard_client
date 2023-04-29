import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            { displayName: true, fileName: false },
          ],
        ],
      },
    }),
    svgr({
      include: "src/assets/svgs/*.svg",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts"],
  },
});
