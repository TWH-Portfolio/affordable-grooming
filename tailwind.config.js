/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: 'hsl(42 30% 97%)',
        'cream-dark': 'hsl(42 20% 92%)',
        navy: 'hsl(210 55% 34%)',
        'navy-light': 'hsl(210 45% 45%)',
        'navy-dark': 'hsl(210 60% 22%)',
        fg: 'hsl(210 30% 12%)',
        'fg-muted': 'hsl(210 15% 45%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '10px',
      },
    },
  },
  plugins: [],
}
