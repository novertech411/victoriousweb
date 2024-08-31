import { Inter } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        maps: "url('/image/map.png')",
        handbg: "url('/image/handbg.png')",
      },

      fontFamily: {
        inter: ["var(--font-inter)"],
        indie: ["var(--font-indie)"],
      },

      colors: {
        primary: "#E03C31",
      },
    },
  },
  plugins: [],
};
export default config;
