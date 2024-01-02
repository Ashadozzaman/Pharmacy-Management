/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {
        '.required::after' :{
          content: '"*"',
          color: 'red',
        },
      };

      addUtilities(newUtilities,['responsive','hover']);
    }
  ],
}

