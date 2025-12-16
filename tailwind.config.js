/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Tailwind scans ALL JS, TS, JSX, TSX, MDX files in the app folder
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // also scans all files in the components folder
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    // Configuration for the default container class
    container: {
      center: true,
      padding: "15px"
    },

    // Custom breakpoints for responsive design
    screens: {
      sm: "640px", // small devices (phones)
      md: "768px", // medium devices (tablets)
      lg: "960px", // large devices (small laptops)
      xl: "1200px", // extra large devices (desktops)
    },

    // Extend Tailwind’s default theme (add custom stuff)
    extend: {
      colors: {
        primary: "#020258", // custom dark color for main elements
        secondary: "#666666", // medium grey
        accent: "#DB0706", // bright yellow accent color
        border: "#D7D7D7", // light grey for borders
      },

      boxShadow: {
        custom: "0px 4px 54px 10px rgba(18, 19, 21, 0.86)",
        // a very large shadow with some blur and opacity
      },
    },
  },

  // Plugins extend Tailwind functionality
  plugins: [require("tailwindcss-animate")],
  // Adds utility classes for animations (like fade, bounce, slide, etc.)
};
