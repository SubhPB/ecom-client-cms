import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({addUtilities}: {addUtilities: Function}){
      addUtilities({
        '.hide-srollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          'display': 'none'
        },
        '.scrollbar-cstm': {
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'grey',
            'border-radius':'15px' 
          }, 
          
        },
        '.x-crousel': {
          'scroll-snap-type': 'x mandatory' 
        },
        '.x-crousel-item': {
          'scroll-snap-align': 'start'
        }
      })
    }
  ],
};
export default config;
