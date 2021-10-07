const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        rose: colors.rose,
        "warm-gray": colors.warmGray,
        "alembic-orange": "#ef3e24",
      },
    },
    minHeight: {
      "3/4": "75vh",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography", "@tailwindcss/forms")],
};
