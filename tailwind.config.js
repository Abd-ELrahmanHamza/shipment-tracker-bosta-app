/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#ffe5e7", // Very light
          100: "#ffccd0", // Lighter
          200: "#ff99a1", // Light
          300: "#ff6672", // Medium light
          400: "#ff3343", // Slightly darker
          500: "#e30613", // Default (primary)
          600: "#cc0511", // Slightly darker than default
          700: "#b2040f", // Darker
          800: "#8f030c", // Even darker
          900: "#6b0209", // Very dark
        },
      },
    },
  },
  plugins: [],
};
