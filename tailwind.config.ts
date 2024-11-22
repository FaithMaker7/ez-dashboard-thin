import type { Config } from "tailwindcss";
import { colors } from "./src/style/color.mjs";
export default {
  darkMode: "class",
  corePlugins: {
    preflight: false
  },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_color: "var(--el-bg-color)",
        primary: "var(--el-color-primary)",
        text_color_primary: "var(--el-text-color-primary)",
        text_color_regular: "var(--el-text-color-regular)",
        ...colors
      },
      borderRadius: {
        "3xl": "calc(var(--radius) + 6px)",
        "2xl": "calc(var(--radius) + 4px)",
        xl: "calc(var(--radius) + 2px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      }
    }
  }
} satisfies Config;
