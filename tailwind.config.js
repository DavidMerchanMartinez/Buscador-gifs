/** @type {import('tailwindcss').Config} */
export default {
 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "laptop":{"max": "1000px"},
      "celular":{"max": "550px"},
    },
    extend: {}
      
    
  },
  plugins: [],
}

