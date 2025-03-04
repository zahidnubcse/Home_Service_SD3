 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d9488",
        "low-teal": "#99f6e4", // teal-600 color
      },
    },
  },
  plugins: [],
};
