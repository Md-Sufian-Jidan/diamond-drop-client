/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust if needed
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Primary theme colors
        crystal: {
          DEFAULT: '#A7F3F3', // Light cyan
          dark: '#22D3EE',
        },
        royal: {
          DEFAULT: '#3B82F6', // Royal blue
          dark: '#1D4ED8',
        },
        gold: {
          DEFAULT: '#FFD700', // Gold accent
          light: '#FFF8DC',
        },
        // Neutrals for elegance
        background: '#F9FAFB', // Light background
        card: '#FFFFFF',
        border: '#E5E7EB',
        text: '#1F2937',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        heading: ['Inter', 'ui-sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 14px rgba(0, 0, 0, 0.06)',
        gold: '0 4px 14px rgba(255, 215, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
