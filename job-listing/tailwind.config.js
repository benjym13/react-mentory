/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-cyan': {
          200: 'hsl(180, 52%, 96%)',
          400: 'hsl(180, 31%, 95%)',
          500: 'hsl(180, 29%, 50%)',
          600: 'hsl(180, 8%, 52%)',
          800: 'hsl(180, 14%, 20%)',
        },
      },
    },
    fontFamily: {
      display: ['League Spartan', 'sans-serif'],
    },
    backgroundImage: {
      head: "url('assets/images/bg-header-desktop.svg')",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
