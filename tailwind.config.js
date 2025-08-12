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
        gnb: "#C4BAE3",
        mainText: "#6D6775",
        subText: "#919FBA",
        background: "#FAF5EF",
        subBackground: "#6C819E",
        pointColor: '#FDAAC4',
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
        skillBorder: '#B5CFEA',
        projectTab: '#B4C0D7',
        textColor: '#333333'
      },
    }
  },
  plugins: [],
}
