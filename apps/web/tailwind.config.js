export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        code: {
          bg: '#080A12',
          panel: '#05070F',
          surface: '#0F141F',
          text: '#E5E7EB',
          muted: '#A1A9B3',
          accent: '#81FE88',
          accentDark: '#52DC6A',
          outline: 'rgba(255, 255, 255, 0.12)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      boxShadow: {
        glow: '0 40px 120px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
