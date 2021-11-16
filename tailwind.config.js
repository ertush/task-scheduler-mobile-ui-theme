module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "secondary-dark" : "#cfd9e4",
        "secondary-light" : "#dbe9f7",
        "secondary-accent" : "#0b1e51",
        "secondary-grad-light": "#f6f8fc",
        "primary-dark" : "#4530b2",
        "primary-grad-dark" : "#7463e3",
        "primary-light" : "#5450d6",
        "primary-alt-light": "#7464e4",
        "primary-accent" : "#20d1fe"
      },
      spacing: {
        "40px" : "40px",
        "320px" : "320px",
        "640px" : "640px"
      },

       borderRadius: {
        "50px" : "50px",
        "40px" : "40px",

       },

       boxShadow:{
        "3xl" : "0px 15px 25px -15px rgba(0,0,0,0.96)",
        "4xl" : "0px 16px 28px -9px rgba(0,0,0,0.93)"
       }


    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
