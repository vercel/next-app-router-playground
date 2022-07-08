/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      // TODO create better animation to demo re-rendering
      keyframes: ({ theme }) => ({
        mutation: {
          "0%": {
            background: theme("colors.rose.200"),
          },
          "10%": {
            background: theme("colors.rose.200 / 15%"),
            color: theme("colors.rose.200 / 75%"),
          },
          "100%": {
            background: theme("colors.rose.200 / 0%"),
          },
        },
      }),
    },
  },
}
