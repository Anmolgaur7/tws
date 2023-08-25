/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      'home1': "url('../src/images/home1.jpg')",
      'contact': "url('../src/images/contact.jpg')",
      'catalogue': "url('../src/images/catalogue.jpg')",
      'services1': "url('../src/images/services.jpg')",
      'services2': "url('../src/images/services.png')",
    },
    extend: {keyframes: {
      fadeinleft: {
        '0%': { transform: 'translateX(-50rem)' },
        '100%': { transform: 'translateX(0)' },
      }
    },
    animation: {
      fadeinleft: 'fadeinleft 1s ease-in-out ',
    }},
  },
  plugins: [],
}

