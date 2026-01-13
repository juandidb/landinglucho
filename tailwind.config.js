/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#0b1018',
          800: '#121826',
          700: '#1f2533',
        },
        accent: {
          DEFAULT: '#1c2c3b',
          highlight: '#9ec3ff',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', '"Space Grotesk"', 'sans-serif'],
        display: ['"Space Grotesk"', '"IBM Plex Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(5, 9, 15, 0.55)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 45%), radial-gradient(circle at 80% 0%, rgba(66, 116, 170, 0.25), transparent 40%)',
      },
    },
  },
  plugins: [],
}

