/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bevan', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'solar-blue': 'var(--color-solar-blue)',
        steel: 'var(--color-steel)',
        'texas-gold': 'var(--color-texas-gold)',
        sand: 'var(--color-sand)',
        sun: 'var(--color-sun)',
        ink: 'var(--color-ink)',
        'brand-white': 'var(--color-white)',
      },
    },
  },
  plugins: [],
};
