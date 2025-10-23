/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Timeless Brookfields Brand Colors
        primary: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f1ea',
          300: '#efe9dd',
          400: '#e8dfc9',
          500: '#d4af37', // Main gold
          600: '#c9a961',
          700: '#b8954d',
          800: '#967a3e',
          900: '#6b5728',
        },
        white: '#FFFFFF',
        cream: '#FAFAF8',
        charcoal: {
          DEFAULT: '#333333',
          dark: '#1A1A1A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
