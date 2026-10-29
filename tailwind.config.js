/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#faf7fd',
          100: '#f3ecfa',
          200: '#e8dbf6',
          300: '#d7c0ee',
          400: '#be9be2',
          500: '#a374d3',
          600: '#8955be',
          700: '#7242a0',
          800: '#5e3783',
          900: '#4e2f6b',
          950: '#321948',
        },
        romantic: {
          purple: '#6b3294',
          deep: '#4a154b',
          violet: '#7c3aed',
          wine: '#581c87',
          blush: '#fff1f2',
          rose: '#f43f5e',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        handwriting: ['"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'romantic': '0 10px 30px -10px rgba(124, 58, 237, 0.12), 0 4px 6px -4px rgba(124, 58, 237, 0.06)',
        'romantic-lg': '0 20px 40px -15px rgba(107, 50, 148, 0.18), 0 8px 10px -6px rgba(107, 50, 148, 0.08)',
        'romantic-glow': '0 0 25px rgba(190, 155, 226, 0.45)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
};
