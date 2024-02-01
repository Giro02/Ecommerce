/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      aspectRatio: {
        '4.47/1': '4.47/1',
      },
    },
    colors:{
      color:{
        verde:"#417B25",
        hover:"#436e2cde",
        branco:"rgb(255 255 255)",
        borda:"rgb(229 231 235)",
        preto:"#373737",
      }
    },
  },
  plugins: [],
}
