/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'hsl(223, 87%, 63%)',
        'custom-secondary-pale-blue': 'hsl(223, 100%, 88%)',
        'custom-secondary-light-red': 'hsl(354, 100%, 66%)',
        'custom-gray': 'hsl(0, 0%, 59%)',
        'custom-very-dark-blue': 'hsl(209, 33%, 12%)',
      },
    },
  },
  plugins: [],
}

