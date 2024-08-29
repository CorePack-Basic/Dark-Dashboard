/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./calender.html",
    "./files.html",
    "./security.html",
    "./setting.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#393939",
        secondary : "#ffffff80",
        middle_color : "#393939",
        levels : "#ff00005c",
        red : "#ff0000",
        bluer : "#0362ff"
      },
      container : {
        center : true
      },
      keyframes : {
        "wingle" : {
          "0%" : {'letter-spacing': '2rem' , 'opacity' : '0.6'},
          "40%" : {"opacity" : ".6"},
          "100%" : {"letter-spacing" : "normal" , "opacity" : "1"}
        }
      },
      animation : {
        "wingle" : 'wingle 1s cubic-bezier(.215,.61,.355,1) both'
      },
      borderColor : {
        borderTask : "rgb(20, 22, 26)"
      },  
    },
  },
  plugins: [
    require('tailwindcss'),
    require('tailwind-scrollbar'),

  ],
}