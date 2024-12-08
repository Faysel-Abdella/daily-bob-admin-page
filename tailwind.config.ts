const { nextui } = require("@nextui-org/react");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans KR", "sans-serif"],
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        mainBlack: "#4D4D4D",
        secondaryBlack:"#353A46",
        thirdBlack:"#323232",
        mainBlue: "#007AFF",
        secondBlue:"#42A8FD",
        whiteBlue:"#E0F1FF",
        mainWhite: "#ffffff",
        mainPurple: "#9388FE",
        mainGray: "#A1A9A3",
        whiteGray:"#ECEDF1",
        fontGray:"#A0A0A0",
        secondWhiteGray:"#868F9A",
        mainRed: "#F05858",
        whiteRed:"#FFE8E8",
        grayLight:"#9d9d9d",
        lightestGray:"#F5F5F5",
        secondGray: "#A0A0A0",
        thirdGray:"#DCDCDC",
        bgPurple: "#F6F5FF",
        bgGray: "#F5F6F8",
        grayBorder: "#D2D5D6",
        lightBorder:"#D9D9D9"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
