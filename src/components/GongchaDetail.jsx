import React, { useState } from 'react';
import gongchaMain from '../images/gongcha.png'
import gongchaGnb from '../images/gongcha_gnb.png'


function GongchaDetail() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const features = [
        {
            title: '사용자 친화적인 반응형 메인 페이지 구현 (PC, Tablet, Mobile 지원)',
            detail: 'CSS 미디어쿼리를 사용하여 다양한 디바이스에 최적화된 레이아웃을 구현하였습니다.'
        },
        {
            title: 'Swiper를 활용한 새로운 메뉴 소개 섹션',
            detail: 'Swiper.js를 이용하여 자동 전환 슬라이드, 터치 인터랙션 기능을 적용하였습니다.'
        },
        {
            title: 'React-CountUp을 사용해 글로벌 경쟁력 섹션 시각적 강조',
            detail: '숫자 증가 애니메이션을 통해 사용자에게 기업의 성장성과 신뢰감을 전달하였습니다.'
        },
        {
            title: '카테고리별 메뉴 탐색 및 음료 상세 정보 팝업창 구현',
            detail: 'React 상태 관리와 상세 팝업 기능을 구현하였습니다.'
        },
        {
            title: '카카오 API를 활용한 매장 위치 검색 페이지 구현',
            detail: '카카오 지도 API를 활용하여 사용자 위치 기반 매장 탐색 기능을 제공하였습니다.'
        },
        {
            title: 'Firebase를 활용한 로그인 / 마이페이지 구현',
            detail: 'Firebase Authentication과 Firestore를 사용하여 로그인 및 사용자 데이터 관리를 처리하였습니다.'
        },
    ];

    return (
        <section className='text-[20px]'>
            <div className='mb-12'>
                <img src={gongchaMain} alt='공차 메인 이미지' />
            </div>

            <h1 className="mb-3 font-semibold">🎨 주요 정보 및 기간</h1>

            <div className="border border-skillBorder rounded-2xl shadow-md mb-12 bg-[#f9f9f9]">
              <div className="px-6 py-8 space-y-6 text-textColor text-[16px] leading-relaxed">     
                  <p className="text-lg">
                  📆 <span className="font-semibold text-gray-800 ">프로젝트 기간</span> : <span className="text-black">2024.09 ~ 2024.12</span>
                  </p>

                  <div>
                    <h2 className="font-semibold text-lg mb-2 ">🔎 문제</h2>
                    <p className="list-disc list-inside text-[16px] text-gray-700 px-9">
                    기존 공차 웹사이트는 메뉴 탐색 과정이 복잡해 사용자가 원하는 정보를 찾기까지 여러 단계를 거쳐야 했습니다.<br />
                    특히 메뉴 상세 페이지에서 가격과 칼로리 정보가 하단에 위치해 사용자가 자주 확인하는 정보 접근성이 낮았습니다.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg mb-2 ">💡 해결</h2>
                    <p className="list-disc list-inside text-[16px] text-gray-700 px-9">
                    메뉴 카테고리를 재구성하고 가격 및 칼로리 정보를 상단에 배치하여 사용자 정보 탐색 흐름을 개선했습니다.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg mb-2 ">📈 결과</h2>
                    <p className="list-disc list-inside text-[16px] text-gray-700 px-9">
                   사용자가 가장 먼저 확인하는 정보를 상단에 배치해 메뉴 탐색 시간이 줄어들도록 UI 구조를 개선했습니다.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg mb-2 ">🎯 개발 목표</h2>
                    <ul className="list-disc list-inside text-[16px] text-gray-700 px-9">
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">브랜드 컨셉과 톤앤매너를 분석·보완하여 사용자 경험(UX)과 UI를 개선한 웹사이트 리뉴얼</li>
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">React.js 기반의 반응형 웹사이트 개발</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg mb-2">⚙️ 개발 환경</h2>
                    <ul className="flex flex-wrap gap-3">
                        {['REACT', 'HTML5', 'CSS3', 'JAVASCRIPT', 'FIREBASE'].map((item) => (
                        <li
                            key={item}
                            className="px-4 py-1 bg-[#c35050] text-white rounded-full text-base"
                        >
                            {item}
                        </li>
                        ))}
                    </ul>
                  </div>

                  <div>
                  <h2 className="font-semibold text-lg mb-2">⭐ 프로젝트 소개</h2>
                    <ul className="list-disc list-inside text-[16px] text-gray-700 px-9">
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">공차의 브랜드 이미지, 톤앤매너, 디자인 가이드를 구체적으로 조사·분석하여 리뉴얼 방향성 수립</li>
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">메인 페이지 구조 재설계와 콘텐츠 요소 추가로 레이아웃 완성도 강화</li>
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">메뉴 영양성분표 UI 단순화를 통해 정보 가독성과 접근성 향상</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg mb-2">📎 배포 주소</h2>
                    <a
                        href="https://sohyun32253.github.io/Gongcha/"
                        className="inline-block px-5 py-2 rounded-full bg-pointColor text-white hover:bg-[#825ff7] transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        웹사이트 방문하기 →
                    </a>
                  </div>
              </div>
            </div>


            <h1 className="mb-3 font-semibold">🛠 주요 기능 소개</h1>

            <div className="mb-12 border border-skillBorder rounded-2xl shadow-lg bg-[#f9f9f9]">
              <ul className="px-6 py-8 space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300"
                  >
                    <button
                      className="w-full text-left font-semibold flex justify-between items-center text-[17px] text-gray-800"
                      onClick={() => toggle(index)}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-lg">💡</span>
                        {feature.title}
                      </span>
                      <span className="text-sm">{openIndex === index ? '▲' : '▼'}</span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index
                          ? 'max-h-[400px] mt-3 opacity-100 scale-100'
                          : 'max-h-0 opacity-0 scale-[0.98]'
                      }`}
                    >
                      <p className="bg-[#f3f4f6] p-4 rounded-md text-gray-700 text-[16px] leading-relaxed">
                        {feature.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          <h1 className="mb-3 font-semibold">🛠 트러블 슈팅</h1>
          <div className="px-6 py-8 border border-skillBorder rounded-2xl shadow-lg bg-[#f9f9f9] space-y-8 text-[16px] leading-relaxed">
            <section>
              <h2 className="mb-2 font-semibold text-lg">💥 문제</h2>
              <p className='text-base'>
                하나의 컴포넌트(<code className="font-mono">MenuDrink.jsx</code>)에 사이트 내 전체 메뉴를 구현하여 2,000줄이 넘는 코드가 만들어지면서, <br />
                가독성 저하와 유지보수 어려움 같은 문제가 발생했습니다.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-semibold text-lg">🤔 원인 및 고민</h2>
              <p className='text-base'>
                메뉴 종류가 계속 추가되면서 하나의 파일로 관리하기에는 규모가 너무 커지고, <br />
                컴포넌트 분리 기준도 명확하지 않아 효과적인 리팩토링 방향을 정하는 데 어려움을 겪었습니다.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-semibold text-lg">💡 해결 방법</h2>
              <p className="mb-4 text-base">
                GNB(Global Navigation Bar)의 메뉴 구조에 맞춰 총 8가지 카테고리로 나누어 컴포넌트를 분리하였습니다:
              </p>
              <img src={gongchaGnb} alt="공차 GNB 메뉴" className="rounded-md shadow-sm mb-5" />
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-2 list-disc list-inside text-gray-800 font-medium">
                <li>신메뉴 (NewMenu)</li>
                <li>베스트셀러 (BestSellerMenu)</li>
                <li>밀크티 (MilkTeaMenu)</li>
                <li>스무디 (SmoothieMenu)</li>
                <li>오리지널티 (OriginalTeaMenu)</li>
                <li>푸룻티&모어 (FruitTeaMenu)</li>
                <li>RTD (RTDMenu)</li>
                <li>커피 (CoffeeMenu)</li>
              </ul>
              <p className="mt-4 text-base">
                또한, 각 메뉴별 데이터를 별도 <code>.js</code> 파일로 분리하여 <code className="font-mono">menuData</code> 디렉토리에서 관리하도록 했습니다.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-semibold text-base">📁 파일 구조</h2>
              <pre className="bg-gray-100 text-[14px] p-4 rounded-lg font-mono overflow-x-auto leading-relaxed">
          {`src
          ├── components
          │   └── MenuDrink.jsx
          ├── category
          │   ├── BestSellerMenu.jsx
          │   ├── NewMenu.jsx
          │   ├── MilkTeaMenu.jsx
          │   ├── SmoothieMenu.jsx
          │   ├── OriginalTeaMenu.jsx
          │   ├── FruitTeaMenu.jsx
          │   ├── RtdMenu.jsx
          │   └── CoffeeMenu.jsx
          └── menuData
              ├── bestSellerData.js
              ├── newMenuData.js
              └── ...`}
              </pre>
            </section>

            {/* 개선 효과 */}
            <section>
              <h2 className="mb-2 font-semibold text-lg">✅ 개선 효과</h2>
              <ul className="list-decimal list-inside space-y-1 text-gray-800 text-base px-9">
                <li className="before:content-['•'] before:mr-2 before:text-slate-400">메뉴 카테고리 기준으로 명확하게 나뉘어 코드 구조와 UI 일치</li>
                <li className="before:content-['•'] before:mr-2 before:text-slate-400">가독성과 유지보수성 대폭 향상</li>
                <li className="before:content-['•'] before:mr-2 before:text-slate-400">신규 메뉴 추가 및 수정 시 해당 컴포넌트와 데이터만 다루면 되어 확장성 확보</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 font-semibold text-base">📜 기타 문서</h2>
              <a
                href="https://github.com/sohyun32253/Gongcha"
                className="inline-block px-5 py-2 rounded-full bg-pointColor text-white hover:bg-[#825ff7] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 구현의 조각들, 여기 있습니다 →
              </a>
            </section>
          </div>
        </section>
    );
}

export default GongchaDetail;