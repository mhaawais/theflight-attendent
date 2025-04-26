import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'], // You can use 'custom' as class
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mycolor: '#e0d6bd',
        mynew: '#eeedeb',
        bgcolor: '#d5ccb4',
      },
    },
  },
  plugins: [],
};
export default config;
