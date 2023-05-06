/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background-color': '#212327',
        'primary-main': '#666666',
        'primary-sub': '#17191B',
        'secondary-main': '#',
        'secondary-sub': '#',
        'hover-color': '#',
        'delete-color': '#74344E',
      }
    },
  },
  plugins: [],
};
