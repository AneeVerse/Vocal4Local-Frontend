/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#f6fae6",     // Light green (Background)
        primaryDark: "#d3e0a3", // Dark green (Background)
        secondary: "#18181b",   // Dark gray/black (Text or buttons)
        secondaryLight: "#f5f5f5", // Light gray (Text or buttons)
        secondaryDark: "#0e0e10",  // Dark gray (Text or buttons)
        accent : "#8ac240",     // Light green (Accent)

      },
    },
  },
  plugins: [],
};
