/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          md: "5rem",
        },
      },
      fontFamily: {
        "general-sans": "General Sans",
        manrope: "Manrope",
      },
      boxShadow: {
        "Drop Shadow": "10px 25px 100px 0px rgba(0,43,107,0.25)",
      },
    },
  },
  plugins: [],
};
