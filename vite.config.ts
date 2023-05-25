import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

const url = "rap2.shxgroup.net";
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.tsx",
      userscript: {
        icon: `http://${url}/image/favicon.png`,
        namespace: "userscript-yapi",
        match: [`*://${url}/*`],
      },
    }),
  ],
});
