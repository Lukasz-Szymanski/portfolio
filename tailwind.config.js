/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"], // Wskazuje Tailwindowi, gdzie szukać używanych klas CSS
  theme: {
    extend: {}, // Możesz tutaj rozszerzać tematy Tailwind
  },
  plugins: [
    require("tailwindcss"), // Dodaj Tailwind jako plugin
    require("autoprefixer"), // Dodaj Autoprefixer
  ],
};
