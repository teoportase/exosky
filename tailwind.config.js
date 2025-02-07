/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#F9F4F1",
        accent: "#197278",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        kanit: ["var(--font-kanit)"],
      },
    },
  },
  plugins: [],
};
