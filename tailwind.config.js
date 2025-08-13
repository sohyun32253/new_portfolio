export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  safelist: [
    'border-primary',
    'text-primary',
    'hover:bg-primary',
    'hover:text-white',
  ],
  theme: {
    extend: {
      animation: {
      'blink': 'blink 1.5s ease-in-out infinite',
    },
    keyframes: {
      blink: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0' },
      },
    },
      colors: {
        primary: "#3F547C",
        gnb: "#b6aee4",
        mainText: "#6D6775",
        subText: "#919FBA",
        background: "#FAF5EF",
        subBackground: "#6C819E",
        pointColor: '#A78BFA',
        gnbHover: "#7C79A3", 
        CardButton: "#344A73",
        buttonBg: "#fff5ec",
        cardUi: "#676D77",
        cardUiHover: "#F6F9FF",
        skill01: '#B5CFEA',
        skill02: '#FCD34D',
        skill03: '#C4B5FD',
        skill04: '#F6B8CD',
        detailSection: '#F5F8FF',
        skillBorder: '#f9f9f9',
        projectTab: '#9F8CFF',
        textColor: '#333333'
      },
    }
  },
  plugins: [],
}
