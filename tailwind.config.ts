import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";
// import scrollbarHide from 'tailwind-scrollbar-hide'
// require('tailwind-scrollbar-hide')
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(badge|button|code|input|kbd|link|navbar|toggle|tabs|popover|ripple|spinner).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        lightTextDesignColor: "#eb532c",
        lightBgColor: "#eaeef7",
        lightTextColor: "#212529",
        darkBgColor: "#04091b",
        bodyColor: "#212428",
        lightText: "#c4cfde",
        designColor: "#ff014f",
        gradientStart: "#C9A44C",
        GradientEnd: "#1a160f",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "reverse-spin-slow": "reverse-spin 5s linear infinite",

        ping: "ping 1s cubic-bezier(0, 0, .2, 1) infinite",
      },
      keyframes: {
        "reverse-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" }, // Counter-clockwise rotation
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
