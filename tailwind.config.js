/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['SF Pro', 'sans-serif'],
        'Mrs-Sheppards': ['Mrs Sheppards', 'cursive'],
      },
      colors: {
        mygreen: '#D9FF2F',
        white: '#ffffff',
        yellow: '#D9FF2F',
        slate: {
          500: '#505050',
        },
      },
    },
  },
  plugins: [],
}