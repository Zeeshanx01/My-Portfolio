// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };
module.exports = {
content: [
  "./app/**/*.{js,jsx}",
  "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          purple: '#7D3CFF',
          dark: '#0A0A0F',
          glow: 'rgba(125,60,255,0.2)'
        }
      },
      fontFamily: {
        terminal: ['Space Mono', 'monospace'],
        cyber: ['Rajdhani', 'sans-serif']
      },
      backdropBlur: {
        cyber: '12px'
      }
    }
  }
}