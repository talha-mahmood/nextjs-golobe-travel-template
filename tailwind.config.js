/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fafbfc",
          "200": "#79747e",
          "300": "#1c1b1f",
        },
        mediumaquamarine: "rgba(141, 211, 187, 0.4)",
        lightcyan: "#cdeae1",
        black: "#000",
        lavender: "#d7e2ee",
        neutrals: "#fff",
        "mint-green": "#8dd3bb",
        paleturquoise: "#9be0c8",
        "orange-range-orange-90": "#ff7900",
        "blackish-green": "#112211",
      },
      fontFamily: {
        "montserrat-medium-12": "Montserrat",
        "tradegothic-bold-40": "'TradeGothic LT Extended'",
        "medium-14": "Manrope",
      },
      borderRadius: {
        "11xl": "30px",
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      "25xl": "44px",
      "21xl": "40px",
      xs: "12px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  // corePlugins: {
  //   preflight: false,
  // },
  
};
