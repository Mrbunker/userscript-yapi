import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.tsx",
      userscript: {
        icon: "https://vitejs.dev/logo.svg",
        namespace: "userscript-yapi",
        match: ["*://rap2.shxgroup.net/*"],
      },
    }),
  ],
});
