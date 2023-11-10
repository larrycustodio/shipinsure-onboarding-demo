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
        gray: {
          10: "#1A1A1A",
          85: "#D9D9D9",
        },
        "utility-purple": "#6675FF",
        "neutral-midnight": {
          0: "#06001E",
          1: "#06001E99",
          2: "#06001EBF",
        },
        "calming-breeze": {
          "tint-0": "#6675FF",
          "tint-1": "#8591FF",
          "tint-2": "#A3ACFF",
        },
        "purely-heaven": "#F4F4F9",
        slate: "#3D5781",
        surface: {
          6: "#06001E1F",
        },
      },
      fontSize: {
        "2xs": ".625rem", // 10px
      },
      height: {
        14: "3.5rem", // 56px
      },
      lineHeight: {
        "3.5": "0.875rem", // 14px
      },
      spacing: {
        "7.5": "1.875rem", // 30px
        12.5: "3.125rem", // 50px
        25: "6.25rem", // 100px
        30: "7.5rem", // 120px
      },
      maxWidth: {
        "form-wrapper": "416px",
      },
      gap: {},
      boxShadow: {
        nav: "0px 20px 24px -4px rgba(0, 0, 0, 0.08)",
      },
      gridTemplateRows: {
        layout: "100px auto",
      },
      gridTemplateColumns: {
        layout: "350px auto",
      },
    },
  },
  plugins: [],
};
export default config;
