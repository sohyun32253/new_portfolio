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
        gnb: "#B4C0D7",
        mainText: "#6D6775",
        subText: "#919FBA",
        background: "#FAF5EF",
        subBackground: "#6C819E",
        pointColor: '#FDAAC4',
        gnbHover: "#2A4069", 
        CardButton: "#344A73",
        buttonBg: "#fff5ec",
        cardUi: "#676D77",
        cardUiHover: "#F6F9FF",
        skill01: '#F7C59F',
        skill02: '#60A5FA',
        skill03: '#3B82F6',
        skill04: '#B5A8F8',
        skill05: '#EAB308',
        skill06: '#B0CFBC',
        skill07: '#B0CFBC',
        skill08: '#EAB308',
        skill09: '#B5A8F8',
        skill10: '#D3D3D3',
        skill11: '#FFC1A9',
        skill12: '#373737',
        skill13: '#E0C3FC',
        skill14: '#B8DCF2',
        skill15: '#FF95A4',
        detailSection: '#F5F8FF',
        skillBorder: '#B5CFEA',
        projectTab: '#B4C0D7',
        textColor: '#333333'
      },
    }
  },
  plugins: [],
}
