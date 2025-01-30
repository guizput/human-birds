/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bkg: "url('./bkg.jpg')",
      },
      colors: {
        humanBird: "#503f22",
      },
    },
  },
  plugins: [],
};
