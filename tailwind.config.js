/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html","./public/**/main.js","./public/**/main.ts"],
  theme: { 
    extend: {
      fontFamily :{
        costum :['costumFont','sans-serif'],
      },
      backgroundImage:{
        'custom-gradient':'linear-gradient(90deg,rgba(143, 188, 219, 1) 0%, rgba(244, 214, 188, 0.28) 100%)',
      }
    },
  },
  plugins: [],
}

