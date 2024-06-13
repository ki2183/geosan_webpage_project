import type { Config } from "tailwindcss";
import { notoSansKr } from "./app/font/font";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '1060': {'max': '1060px'},
        '1260': {'max': '1260px'},
      },
      gridTemplateColumns:{
        'custom':'0.375fr 0.625fr',
        'left':'0.375fr 0.625fr',
        'right':'0.625fr 0.375fr'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
