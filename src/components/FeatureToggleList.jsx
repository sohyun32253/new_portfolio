import React, { useState } from 'react';

function FeatureToggleList() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      title: '반응형 메인 페이지 구현',
      detail:
        'CSS 미디어쿼리와 Flex/Grid를 활용하여 PC, Tablet, Mobile 환경에서 최적화된 레이아웃을 구현했습니다.',
    },
    {
      title: 'Swiper를 활용한 메뉴 소개 섹션',
      detail:
        'Swiper.js 라이브러리를 통해 자동 슬라이드 및 터치 지원 기능을 구현하여 사용자 UX를 향상시켰습니다.',
    },
    {
      title: 'React-CountUp으로 글로벌 지표 강조',
      detail:
        '숫자 애니메이션을 통해 데이터 수치를 동적으로 강조, 사용자 시각 집중을 유도했습니다.',
    },
    {
      title: '카테고리별 메뉴 탐색 및 상세 팝업',
      detail:
        '카테고리 선택 시 필터링된 메뉴가 보여지며, 개별 음료 클릭 시 모달 팝업으로 상세 정보 제공.',
    },
    {
      title: '카카오 지도 API를 활용한 매장 검색',
      detail:
        '사용자 위치 기반으로 주변 매장을 검색하고 지도로 표시하여 접근성과 편의성을 높였습니다.',
    },
    {
      title: 'Firebase 기반 로그인 및 마이페이지 구현',
      detail:
        'Firebase Auth로 사용자 인증, Firestore를 통해 개인화된 데이터 저장 및 관리 기능 구현.',
    },
  ];

  return (
    <section className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">주요 기능 및 상세 구현</h2>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="border rounded-xl p-4 shadow-sm transition-all duration-300"
          >
            <button
              className="w-full text-left font-semibold flex justify-between items-center"
              onClick={() => toggle(index)}
            >
              <span>{feature.title}</span>
              <span className="text-sm">{openIndex === index ? '▲' : '▼'}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-[200px] mt-2 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-sm text-gray-700">{feature.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FeatureToggleList;
