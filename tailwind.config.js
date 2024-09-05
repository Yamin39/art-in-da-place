/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-color": "#A81C51",
      },
      fontFamily: {
        josefin: `"Josefin Sans", sans-serif`,
        "fira-sans": `"Fira Sans Condensed", sans-serif`,
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
