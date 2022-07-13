/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{app,pages}/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: ({ theme }) => ({
        childrenRender: {
          '0%': {
            ['border-color']: theme('colors.pink.600'),
          },
          '50%': {
            ['border-color']: theme('colors.pink.600'),
          },
        },
        segmentChange: {
          '0%': {
            background: theme('colors.purple.600 / 90%'),
            color: theme('colors.purple.900'),
          },
          '30%': {
            background: theme('colors.purple.600 / 50%'),
            color: theme('colors.purple.90'),
          },
          '100%': {
            background: theme('colors.black / 5%'),
          },
        },
      }),
    },
  },
};
