import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": {
          900: "#1a1a1a",
          800: "#3a3a3a",
          700: "#595959",
          600: "#6c6c6c",
          500: "#949494",
          400: "#b4b4b4",
          300: "#d8d8d8",
          200: "#e8e8e8",
          100: "#f2f2f2",
          50: "#f9f9f9"
        }
      },
      backgroundColor: {
        // "main": {
        //   900: "#0a0a0a",
        //   800: "#2c2c2c",
        //   700: "#494949",
        //   600: "#5c5c5c",
        //   500: "#838383",
        //   400: "#a4a4a4",
        //   300: "#cacaca",
        //   200: "#dedede",
        //   100: "#ebebeb",
        //   50: "#f6f6f6"
        // }
      }
    },
  },
  plugins: [],
};
export default config;
