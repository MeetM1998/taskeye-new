/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "maastricht-blue": "#0B1F41",
        "persian-blue": "#1542b7",
        "dark-cornflower-blue": "#234292",
        blueberry: "#5684FB",
        "peach-orange": "#FFCC99",
        "tea-green": "#CCFFCC",
        platinum: "#E0E0E3",
        "light-gray": "#d3d3d3",
        "anti-flash-white": "#F0F0F0",
        "silver-foil": "#abadb7",
        cultured: "#f5f5f5",
      },
    },
  },
  plugins: [],
};