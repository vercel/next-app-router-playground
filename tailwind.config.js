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
          '40%': {
            ['border-color']: theme('colors.pink.600'),
          },
        },
        segmentChange: {
          '0%': {
            background: theme('colors.pink.600'),
          },
          '40%': {
            background: theme('colors.pink.600'),
          },
        },
      }),
    },
  },
};
