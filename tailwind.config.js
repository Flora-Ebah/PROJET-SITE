module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'navy-blue': '#0A192F',
      },
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
