/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,js}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#a5a5a5",
        orange: "#fa9e0c",
        "dark-gray": "#333333",
      },
      gap: {
        1: "20px",
      },
    },
  },
  plugins: [],
};
