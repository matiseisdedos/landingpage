/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#14213D',
        secondary: '#D7FCD4',
        borders: '#3C6E71',
      },

      fontSize: {
        xs: 'clamp(0,8rem, 0.34vw + 0.91rem, 1.19rem))',
        sm: 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
        base: 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
        md: 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
        lg: 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
        "xl": 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
        "2xl": 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)',
        "3xl": 'clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)',
        '4xl': 'clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)',
        '5xl': 'clamp(5.96rem, 10.69vw + 3.29rem, 11.84rem)',
        '6xl': 'clamp(7.45rem, 15.14vw + 3.66rem, 15.78rem)',
      },
    },
  },
  plugins: [],
}
