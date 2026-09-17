import React, { useState } from 'react';
import gongchaMain from '../images/gongcha.png'
import gongchaGnb from '../images/gongcha_gnb.png'

function GongchaDetail() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTroubleTab, setActiveTroubleTab] = useState('frontend');

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const improvementItems = [
      {
        title: '🔗 Data & API',
        items: [
          '121개 메뉴 데이터 MySQL DB 구축',
          'Express + mysql2 기반 REST API 구현',
          'Axios 기반 React ↔ API 데이터 연동',
          '로컬 환경에서 DB → API → UI 데이터 흐름 구현',
        ],
      },
      {
        title: '🧩 Architecture',
        items: [
          '2,000줄 메뉴 구조를 카테고리 단위로 리팩터링',
          'MenuGrid 등 반복 UI 공통 컴포넌트화',
          '메뉴 데이터와 UI 컴포넌트 역할 분리',
          '정적 데이터 → DB/API 기반 구조로 확장',
        ],
      },
    ];

    const projectGoals = [
      {
        icon: '🎨',
        title: 'UX Renewal',
        detail: '브랜드 톤앤매너를 유지한 메뉴 탐색 중심의 반응형 UX 리뉴얼',
      },
      {
        icon: '🧩',
        title: 'Architecture',
        detail: '공통 컴포넌트와 로딩 UX 개선을 통한 유지보수 가능한 구조 설계',
      },
      {
        icon: '🔗',
        title: 'Data & API',
        detail: '정적 메뉴 데이터를 MySQL · Express API 기반 구조로 확장',
      },
    ];

    const features = [
      {
        title: '메인 페이지 구조 리팩터링',
        detail:
          'Content.js에 집중되어 있던 코드를 QuickMenu, MainCarousel, NewMenuSection, TeaRecipeSection 등 섹션 단위 컴포넌트로 분리하여 유지보수성을 개선했습니다.',
      },
      {
        title: '음료 메뉴 공통 컴포넌트화',
        detail:
          '카테고리별로 반복되던 메뉴 카드 UI를 MenuGrid 공통 컴포넌트로 통합하여 코드 중복을 줄이고 일관된 UI 구조로 개선했습니다.',
      },
      {
        title: '로딩 및 렌더링 성능 개선',
        detail:
          'React.lazy와 Suspense를 적용하고, Intersection Observer 기반 LazyImage 컴포넌트를 제작하여 필요한 컴포넌트와 이미지를 지연 로딩하도록 개선했습니다.',
      },
      {
        title: 'MySQL 기반 메뉴 데이터베이스 구축',
        detail:
          'JavaScript 파일에서 관리하던 메뉴 데이터를 MySQL로 이전하고, menus 테이블에 총 121개의 메뉴 데이터를 저장하여 데이터 관리 구조를 개선했습니다.',
      },
      {
        title: 'REST API 구축 및 React 데이터 연동',
        detail:
          'Express와 mysql2로 메뉴 조회 API를 구현하고 Axios로 데이터를 받아 카테고리별 MenuGrid와 상세 팝업까지 동적으로 렌더링하도록 연결했습니다.',
      },
      {
        title: '모바일 메뉴 상세 UX 개선',
        detail:
          '모바일 환경에 맞게 상세 팝업의 정보 구조를 재배치하고, 선택한 사이즈의 가격과 칼로리만 표시하여 필요한 정보를 빠르게 확인할 수 있도록 개선했습니다.',
      },
    ];

    const troubleshootingTabs = [
      {
        id: 'frontend',
        label: 'Frontend',
        icon: '🎨',
      },
      {
        id: 'data',
        label: 'Data & API',
        icon: '🔗',
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
                  📆 <span className="font-semibold text-gray-800 ">프로젝트 기간</span> : <span className="text-black">2024.09 ~ 2024.12 / 2026.09 기능 개선</span>
                  </p>

                  <h2 className="font-semibold text-lg mb-2 ">💬 제목 : 공차 웹사이트 UX 리뉴얼</h2>
                  <h2 className="font-semibold text-lg mb-2 ">✍🏻 설명</h2>
                  <p className="list-disc list-inside text-[16px] text-gray-700 px-9">
                    React 기반 공차 브랜드 웹사이트를 리뉴얼하며 메뉴 탐색 흐름, 반응형 UI, 모바일 상세 팝업 UX를 개선했습니다. <br/>
                    이후 컴포넌트 구조 분리와 Lazy Loading, Skeleton UI를 적용해 프론트엔드 구조와 사용자 경험을 개선했으며, 추가 개선에서는 로컬 개발 환경에서 Express와 MySQL 기반 REST API를 구축하고, 기존 정적 메뉴 데이터를 DB 기반으로 전환하여 React와의 데이터 연동 구조를 구현했습니다.
                    이를 통해 UI 리뉴얼에서 그치지 않고 데이터 저장 → API 요청 → 화면 렌더링까지 이어지는 전체 데이터 흐름을 직접 구현했습니다.
                  </p>

                  <h2 className="font-semibold text-lg mb-4">
                    🎯 개발 목표
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projectGoals.map((goal) => (
                      <div
                        key={goal.title}
                        className="p-5 rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      >
                        <div className="text-2xl mb-3">
                          {goal.icon}
                        </div>

                        <h3 className="font-semibold text-[17px] mb-2">
                          {goal.title}
                        </h3>

                        <p className="text-[15px] text-gray-600 leading-relaxed">
                          {goal.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg mb-2">⚙️ 개발 환경</h2>
                    <div className="space-y-5">
                      <div>
                        <p className="mb-2 font-semibold">Frontend</p>
                        <ul className="flex flex-wrap gap-3">
                          {[
                            'REACT',
                            'JAVASCRIPT',
                            'CSS3',
                            'AXIOS',
                            'SWIPER',
                            'REACT HOT TOAST',
                            'REACT LAZY',
                            'SUSPENSE',
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
                        <p className="mb-2 font-semibold">Data & API</p>
                        <ul className="flex flex-wrap gap-3">
                          {[
                            'NODE.JS',
                            'EXPRESS',
                            'MYSQL',
                            'MYSQL2',
                            'REST API',
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
                    </div>
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg mb-2">📎 배포 주소</h2>
                    <p className='text-sm text-gray-600 mb-4'>※ 배포 버전은 GitHub Pages 정적 환경으로 제공되며, MySQL·Express API 연동은 로컬 개발 환경에서 구현했습니다.</p>
                    <a
                        href="https://sohyun32253.github.io/Gongcha/"
                        className="inline-block px-5 py-2 rounded-full bg-[#d18787] text-white hover:bg-[#a84040] transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        웹사이트 방문하기 →
                    </a>
                  </div>
              </div>
            </div>

            <h1 className="mb-3 font-semibold">✨ 핵심 개선 요약</h1>

            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-5">
              {improvementItems.map((section) => (
                <div
                  key={section.title}
                  className="border border-skillBorder rounded-2xl shadow-md bg-[#f9f9f9] p-6"
                >
                  <h2 className="font-semibold text-lg mb-3">
                    {section.title}
                  </h2>

                  <ul className="space-y-2 text-[16px] text-gray-700">
                    {section.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
            <div className="mb-6 flex gap-2 p-1 bg-gray-100 rounded-xl w-fit">
              {troubleshootingTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTroubleTab(tab.id)}
                  className={`
                    px-5 py-2 rounded-lg text-[15px] font-semibold
                    transition-all duration-300
                    ${
                      activeTroubleTab === tab.id
                        ? 'bg-[#c35050] shadow-sm text-white'
                        : 'text-gray-500 hover:text-gray-800'
                    }
                  `}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
            <div>
            {activeTroubleTab === 'frontend' && (
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
            </div>
            )}

          <div>
            {activeTroubleTab === 'data' && (
            <div className="px-6 py-8 border border-skillBorder rounded-2xl shadow-lg bg-[#f9f9f9] space-y-8 text-[16px] leading-relaxed">

              {/* 문제 */}
              <section>
                <h2 className="mb-2 font-semibold text-lg">💥 문제</h2>
                <p className="text-base">
                  기존에는 메뉴 데이터를 JavaScript 파일에서 직접 관리하고 있어,
                  데이터가 변경될 때마다 프론트엔드 코드를 수정해야 했습니다.
                  <br />
                  또한 UI와 데이터가 프론트엔드 프로젝트 내부에 함께 존재해
                  서버 기반의 데이터 흐름을 경험하기 어렵다는 한계가 있었습니다.
                </p>
              </section>

              {/* 원인 및 고민 */}
              <section>
                <h2 className="mb-2 font-semibold text-lg">🤔 원인 및 고민</h2>
                <p className="text-base">
                  컴포넌트와 메뉴 데이터를 분리한 이후에도 데이터 자체는
                  정적인 JavaScript 파일에 의존하고 있었습니다.
                  <br />
                  단순한 파일 분리를 넘어 실제 웹 서비스처럼
                  데이터베이스와 API를 통해 데이터를 전달하는 구조로
                  확장하고자 했습니다.
                </p>
              </section>

              {/* 해결 방법 */}
              <section>
                <h2 className="mb-2 font-semibold text-lg">💡 해결 방법</h2>

                <p className="mb-5 text-base">
                  기존 메뉴 데이터 121개를 MySQL로 이전하고,
                  Express와 <code className="font-mono">mysql2</code>를 활용해
                  메뉴 데이터를 조회할 수 있는 REST API를 구현했습니다.
                  React에서는 Axios로 API를 호출하여 전달받은 데이터를
                  메뉴 목록과 상세 팝업에 연결했습니다.
                </p>

                {/* 데이터 흐름 */}
                <div className="bg-gray-100 rounded-xl px-6 py-5">
                  <h3 className="font-semibold mb-4">🔄 데이터 흐름</h3>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
                    {[
                      'MySQL',
                      'Express',
                      'REST API',
                      'Axios',
                      'React',
                      'MenuGrid / Detail Popup',
                    ].map((item, index, array) => (
                      <div
                        key={item}
                        className="flex flex-col md:flex-row items-center gap-3"
                      >
                        <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm font-medium">
                          {item}
                        </div>

                        {index < array.length - 1 && (
                          <>
                            <span className="hidden md:block text-gray-400">→</span>
                            <span className="md:hidden text-gray-400">↓</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 구현 구조 */}
              <section>
                <h2 className="mb-2 font-semibold text-base">📁 구현 구조</h2>

                <pre className="bg-gray-100 text-[14px] p-4 rounded-lg font-mono overflow-x-auto leading-relaxed">
                {`MySQL
                └── gongcha_db
                    └── menus (121개 메뉴 데이터)
                          │
                          ▼
                Express Server
                └── mysql2
                    └── GET /api/menus
                          │
                          ▼
                React Client
                └── Axios
                    ├── Category Filtering
                    ├── MenuGrid
                    └── Detail Popup`}
                </pre>
              </section>

              {/* 개선 효과 */}
              <section>
                <h2 className="mb-2 font-semibold text-lg">✅ 개선 효과</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-800 text-base px-9">
                  <li className="before:content-['•'] before:mr-2 before:text-slate-400">121개 메뉴 데이터를 MySQL에서 일관되게 관리</li>
                  <li className="before:content-['•'] before:mr-2 before:text-slate-400">정적 JavaScript 데이터 의존 구조를 DB 기반으로 확장</li>
                  <li className="before:content-['•'] before:mr-2 before:text-slate-400">Express REST API를 통한 클라이언트와 데이터 계층 분리</li>
                  <li className="before:content-['•'] before:mr-2 before:text-slate-400">Axios를 활용한 실제 API 요청 및 응답 처리 경험</li>
                  <li className="before:content-['•'] before:mr-2 before:text-slate-400">로컬 환경에서 DB → API → 화면 렌더링까지 전체 데이터 흐름 구현</li>
                </ul>
              </section>
          </div>
          )}
        </div>
            <section className="mt-8">
              <h1 className="mb-2 font-semibold">📜 기타 문서</h1>
              <a
                href="https://github.com/sohyun32253/Gongcha"
                className="inline-block px-5 py-2 rounded-full bg-[#d18787] text-white hover:bg-[#a84040] transition text-base"
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