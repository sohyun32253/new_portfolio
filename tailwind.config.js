export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'border-primary',
    'text-primary',
    'hover:bg-primary',
    'hover:text-white',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3F547C",
        gnb: "#B4C0D7",
        mainText: "#6D6775",
        subText: "#919FBA",
        background: "#EBF2FF",
        subBackground: "#919FBA",
        gnbHover: "#2A4069", 
        CardButton: "#344A73",
        buttonBg: "#fff5ec",
        cardUi: "#676D77",
        cardUiHover: "#F6F9FF",
        skill01: '#F7C59F',
        skill02: '#A1C6EA',
        skill03: '#B4D4EE',
        skill04: '#B5A8F8',
        skill05: '#F1D58D',
        skill06: '#B0CFBC',
        skill07: '#B0CFBC',
        skill08: '#F1D58D',
        skill09: '#B5A8F8',
        skill10: '#D3D3D3',
        skill11: '#FFC1A9',
        skill12: '#FFC1A9',
        skill13: '#E0C3FC',
        skill14: '#B8DCF2',
        skill15: '#FFD1A9',
        detailSection: '#F5F8FF'
      },
    }
  },
  plugins: [],
}
