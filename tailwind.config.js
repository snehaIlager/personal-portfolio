/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream-dark': '#2d261f', // dark cream/beige for background
        'cream-light': '#f5e9da', // light cream/beige for boxes
        accent: '#43ffaf', // neon green
        highlight: '#a72693', // purple
        codebg: '#161b22', // code block bg
        codeline: '#282c34', // code line bg
        light: '#eaeaea',
        dark: '#0f1117',
        outlinebox: '#43ffaf', // neon green for outlines
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Fira Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        
      },
      backgroundImage: {
        'dev-gradient': 'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #43cea2 100%)',
      },
    },
  },
  plugins: [],
}; 