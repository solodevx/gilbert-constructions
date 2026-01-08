/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Tailwind scans ALL JS, TS, JSX, TSX, MDX files in the app folder
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // also scans all files in the components folder
  ],
  theme: {

    // Custom breakpoints for responsive design
    screens: {
      sm: "640px", // small devices (phones)
      md: "768px", // medium devices (tablets)
      lg: "960px", // large devices (small laptops)
      xl: "1200px", // extra large devices (desktops)
    },

    // Configuration for the default container class
    container: {
      center: true,
      padding: "15px"
    },

    // Extend Tailwind’s default theme (add custom stuff)
    extend: {
      
      // Font family
      fontFamily: {
        primary: "var(--font-dmSans)",   // main font used throughout the site for body text
        secondary: "var(--font-barlow)", // secondary font, e.g., for headings or accents
      },

      // Colors
      colors: {
        primary: "#020258", // custom dark color for main elements
        secondary: "#666666", // medium grey
        accent: "#DB0706", // bright red accent color
        border: "#D7D7D7", // light grey for borders
      },

      // Box shadow
      boxShadow: {
        custom: "0px 4px 54px 10px rgba(18, 19, 21, 0.86)", // a very large shadow with some blur and opacity
      },

      // Background images
      backgroundImage: {
        hero: "url('/assets/img/hero/bg.jpg')"
      }
    },
  },

  // Plugins extend Tailwind functionality
  plugins: [require("tailwindcss-animate")], // Adds utility classes for animations (like fade, bounce, slide, etc.)
};

