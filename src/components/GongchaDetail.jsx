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
      title: '메인 페이지 구조 리팩터링',
      detail: 'Content.js에 집중되어 있던 메인 페이지 코드를 QuickMenu, MainCarousel, NewMenuSection, TeaRecipeSection 등 섹션 단위 컴포넌트로 분리하여 유지보수성을 개선했습니다.'
    },
    {
      title: 'React.lazy와 Suspense 기반 지연 로딩 적용',
      detail: '초기 화면에 필요한 요소는 즉시 로드하고, 하단 섹션은 lazy loading으로 분리했습니다. 로딩 중에는 실제 레이아웃과 유사한 Skeleton UI를 표시해 사용자 경험을 개선했습니다.'
    },
    {
      title: '공통 LazyImage 컴포넌트 제작',
      detail: '이미지에 loading="lazy"와 decoding="async"를 적용하고, 첫 화면 이미지에는 eager 옵션을 적용해 이미지 로딩 전략을 구분했습니다.'
    },
    {
      title: '음료 메뉴 공통 MenuGrid 컴포넌트화',
      detail: '8개 음료 카테고리에서 반복되던 카드 그리드 구조를 MenuGrid 컴포넌트로 통합하여 중복 코드를 줄이고 카테고리별 데이터만 교체할 수 있도록 개선했습니다.'
    },
    {
      title: '모바일 메뉴 상세 팝업 UX 개선',
      detail: '사이즈 선택 버튼을 가격 정보 위로 이동하고, 선택한 사이즈의 가격과 칼로리만 표시하도록 변경했습니다. 또한 max-height와 내부 스크롤을 적용해 모바일 화면에서도 안정적으로 정보를 확인할 수 있도록 개선했습니다.'
    },
    {
      title: 'Toast UI 및 스크롤 인터랙션 개선',
      detail: '기존 alert를 react-hot-toast로 대체하고, 메뉴 카드에는 스크롤 reveal 애니메이션을 적용해 사용자 피드백과 인터랙션 경험을 개선했습니다.'
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

                  <h2 className="font-semibold text-lg mb-2 ">💬 제목 : 공차 웹사이트 UX 리뉴얼</h2>
                  <h2 className="font-semibold text-lg mb-2 ">✍🏻 설명</h2>
                  <p className="list-disc list-inside text-[16px] text-gray-700 px-9">
                    React 기반 공차 브랜드 웹사이트를 리뉴얼하며 메뉴 탐색 흐름, 반응형 UI, 모바일 상세 팝업 UX를 개선했습니다.<br />
                    이후 컴포넌트 구조 분리, Lazy Loading, Skeleton UI, Toast UI를 추가 적용하여 유지보수성과 사용자 경험을 함께 개선했습니다.
                  </p>

                  <div>
                    <h2 className="font-semibold text-lg mb-2 ">1️⃣ UX 개선</h2>
                    <h2 className="font-semibold text-lg mb-2 ">⚠️ 문제</h2>
                    
                    <p className="list-disc list-inside text-[16px] text-gray-700 px-9">
                    기존 공차 웹사이트에서는 신규 시즌 메뉴를 강조하는 영역이 없어<br />
                    사용자가 새롭게 출시된 메뉴를 직관적으로 확인하기 어려웠습니다.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg mb-2 ">💡 해결</h2>
                    <p className="list-disc list-inside text-[16px] text-gray-700 px-9">
                    메인 페이지에 New menu 섹션을 신규 설계하고 <br />
                    Swiper 기반 캐러셀 UI를 적용하여 메뉴 탐색 흐름을 개선했습니다.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg mb-2 ">📈 결과</h2>
                    <p className="list-disc list-inside text-[16px] text-gray-700 px-9">
                    메인 페이지에서 신규 메뉴를 직관적으로 확인할 수 있도록 UI 구조를 개선하고<br />
                    Swiper 기반 캐러셀을 통해 메뉴 탐색 흐름을 자연스럽게 유도했습니다.
                    </p>
                  </div>                  

                  <div>
                    <h2 className="font-semibold text-lg mb-2 ">2️⃣ 음료 페이지</h2>
                    <h2 className="font-semibold text-lg mb-2 ">⚠️ 문제</h2>
                    
                    <p className="list-disc list-inside text-[16px] text-gray-700 px-9">
                    기존 메뉴 상세 페이지에서는 가격과 칼로리 정보가 하단에 위치해<br />
                    사용자가 자주 확인하는 정보 접근성이 낮았습니다.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg mb-2 ">💡 해결</h2>
                    <p className="list-disc list-inside text-[16px] text-gray-700 px-9">
                    사용자가 가장 궁금해하는 정보인 가격·칼로리를 상단에 배치하고<br />
                    메뉴 클릭 시 영양 정보를 확인할 수 있는 모달 UI를 구현했습니다.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg mb-2 ">📈 결과</h2>
                    <p className="list-disc list-inside text-[16px] text-gray-700 px-9">
                   사용자가 가장 먼저 확인하는 정보를 상단에 배치해  <br />
                   메뉴 탐색 흐름을 단순화하고 정보 접근성을 개선했습니다.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg mb-2 ">🎯 개발 목표</h2>
                    <ul className="list-disc list-inside text-[16px] text-gray-700 px-9">
                      <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                        브랜드 톤앤매너를 유지하면서 메뉴 탐색 중심의 UX 리뉴얼
                      </li>
                      <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                        PC, Tablet, Mobile 환경을 고려한 반응형 UI 구현
                      </li>
                      <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                        컴포넌트 분리와 공통 컴포넌트화를 통한 유지보수성 개선
                      </li>
                      <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                        Lazy Loading, Skeleton UI, Toast UI를 적용한 성능 및 UX 개선
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg mb-2">⚙️ 개발 환경</h2>
                    <ul className="flex flex-wrap gap-3">
                        {[
                        'REACT',
                        'JAVASCRIPT',
                        'CSS3',
                        'FIREBASE',
                        'SWIPER',
                        'REACT HOT TOAST',
                        'REACT LAZY',
                        'SUSPENSE'
                      ].map((item) => (
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
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">공차 브랜드 이미지와 톤앤매너를 분석하고 리뉴얼 방향성 수립</li>
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">메인 페이지 구조 재설계 및 신규 콘텐츠 섹션(New menu) 추가</li>
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">메뉴 상세 UI 개선을 통해 영양정보 가독성과 접근성 향상</li>
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

            <h1 className="mb-3 font-semibold">✨ 핵심 개선 요약</h1>

            <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="border border-skillBorder rounded-2xl shadow-md bg-[#f9f9f9] p-6">
                <h2 className="font-semibold text-lg mb-3">🚀 Performance</h2>
                <ul className="space-y-2 text-[16px] text-gray-700">
                  <li>• React.lazy + Suspense 적용</li>
                  <li>• Skeleton UI 적용</li>
                  <li>• LazyImage 공통 컴포넌트 제작</li>
                  <li>• 이미지 lazy loading 적용</li>
                </ul>
              </div>

              <div className="border border-skillBorder rounded-2xl shadow-md bg-[#f9f9f9] p-6">
                <h2 className="font-semibold text-lg mb-3">🧩 Architecture</h2>
                <ul className="space-y-2 text-[16px] text-gray-700">
                  <li>• Content.js 섹션 단위 분리</li>
                  <li>• MenuGrid 공통 컴포넌트화</li>
                  <li>• useIntersectionObserver 훅 제작</li>
                  <li>• 메뉴 데이터 구조 분리</li>
                </ul>
              </div>

              <div className="border border-skillBorder rounded-2xl shadow-md bg-[#f9f9f9] p-6">
                <h2 className="font-semibold text-lg mb-3">📱 Mobile UX</h2>
                <ul className="space-y-2 text-[16px] text-gray-700">
                  <li>• 모바일 GNB 가로 스크롤 탭 적용</li>
                  <li>• 메뉴 상세 팝업 UI 개선</li>
                  <li>• 선택 사이즈 가격/칼로리만 표시</li>
                  <li>• 영양성분 2열 그리드 정리</li>
                </ul>
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

          <h1 className="mb-3 font-semibold">🛠 트러블 슈팅 & 리팩터링</h1>
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
                <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                  반복되던 메뉴 카드 UI를 공통 MenuGrid 컴포넌트로 통합하여 코드 중복을 줄임
                </li>
                <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                  모바일 상세 팝업의 정보 구조를 재정렬하여 가격, 칼로리, 영양정보의 가독성 향상
                </li>
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