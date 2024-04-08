/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#31363F",
        background: "#DDDDDD",
        item: "#76ABAE",
      },
      width: {
        "200px": "200px",
      },
      height: {
        "100px": "100px",
      },
      gap: {
        "20px": "20px",
      },
    },
    plugins: [],
  },
};
