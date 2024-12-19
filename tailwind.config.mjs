/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    /* Tilføj din egen farvepalette */
    colors: {
      transparent: "transparent",
      current: "currentColor",
      creamywhite: "#FFFFF5",
      orange: "#BF602C",
      brown: "#3F2C22" /* Brun farve */,
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      serif: ["neue-haas-grotesk-display"],
      display: ["neue-haas-grotesk-display"],
    },

    /* Tilføj dit typografiske hierarki herunder */
    fontSize: {
      xs: "0.6rem",
      s: "0.85rem",
      m: "1rem",
      l: "1.2rem",

      xsmb: "0.6rem",
      smb: "0.8rem",
      mmb: "1rem",
    },

    customProperties: {
      "font-family-title": "neue-haas-grotesk-display",
      "font-family-body": "neue-haas-grotesk-display",
      "font-weight-500": "roman",
      "font-weight-600": "medium",
    },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    fontWeight: {
      roman: "500",
      medium: "600",
    },

    extend: {
      colors: {
        base: {
          text: "#3F2C22" /* Brun som base tekstfarve */,
          background: "FFFFF5" /* Lys baggrund */,
        },
      },
      cursor: {
        handcursor: "url(/mus.svg) 25 25, pointer",
      },
    },
    /* Resten af konfigurationen */
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
