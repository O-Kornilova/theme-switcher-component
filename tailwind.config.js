/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    transitionDuration: {
      DEFAULT: "300ms",
    },

    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "surface-accent": "rgba(0, 36, 58, 0.8)", // Color #00243A
        "surface-accent-dark": "rgba(0, 92, 173, 0.7)",
        base: "#1A1A1A",
        light: "rgb(213, 213, 213)",
        highlighted: "rgb(0, 255, 255)",
        "icon-cyan": "#00FFFF",
      },
      boxShadow: {
        customUp: `
          -2.82px -2.82px 8.49px 0px #FFFFFF4D,
          14.15px 14.15px 22.64px -0.37px #0000001A,
          -17.54px -17.54px 28.66px 0px #FFFFFF0D,
          10px 10px 28.66px -11.7px #00000033,
          1.58px 1.58px 1.7px 0px #FFFFFF inset,
          -2.07px -2.64px 4.52px -1.51px #000000a8 inset
        `,
        glassActive: `
          0px 0px 0 0px #22d3ee inset,
          0px 0px 3px 0px #2e4b5b inset,
          -1px -1px 0.5px -1px #55cadc inset,
          1px 1px 0.5px -1px #69b3beba inset,
          -1px -1px 0px -0.5px #7979795c inset,
          1px 1px 0px -0.5px #22d3ee4a inset,
          0px 1px 0px 0px #ffffff0d,
          0px 0px 2px 0px #0000001A,
          0px 0.07px 4.73px 0px #000000 inset
        `,
        glass: `
          0px 0px 0 0px #22d3ee inset,
          0px 0px 3px 0px #2e4b5b inset,
          -1px -1px 0.5px -1px #55cadc inset,
          1px 1px 0.5px -1px #69b3beba inset,
          -1px -1px 0px -0.5px #7979795c inset,
          1px 1px 0px -0.5px #22d3ee4a inset,
          0px 1px 0px 0px #ffffff0d,
          0px 0px 2px 0px #0000001A
        `,
        toggleInner: `
          0px 0px 34.77px 0px #00000033,
          0px -0.5px 0.25px 0px #0000004D,
          0px 0.5px 0.75px 0px #FFFFFF66,
          0px 2.07px 3.73px 0px #00000066 inset,
          0px 1.08px 2.48px 0px #000000 inset
        `,
        toggleOut: `
          0px 0px 34.77px 0px #00000033 inset,
          0px -0.5px 0.25px 0px #0000004D inset,
          0px 0.5px 0.75px 0px #FFFFFF66 inset,
          0px 2.07px 3.73px 0px #00000066,
          0px 1.08px 2.48px 0px #000000
        `,
      },
    },
  },
  plugins: [],
};
