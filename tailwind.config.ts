import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mint: "#a1fcd4",
        lavender: "#d6d6fc",
        coral: "#fca1a1",
        sky: "#a1e8fc",
        mustard: "#fcdea1",
        lime: "#d4fca1",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
export default config;

