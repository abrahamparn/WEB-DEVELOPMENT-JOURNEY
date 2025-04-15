/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      idm: "1080px",
      xl: "1440px",
      xxl: "2560px",
    },
    maxWidth: {
      card: "200px",
    },

    extend: {
      // This is for colors
      colors: {
        Yellow_IDM: "#F7CE46",
        Red_IDM: "#D41626",
        Blue_IDM: "#056CB4",
        Black_IDM: "#272727",
        White_IDM: "#EFF1F3",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
