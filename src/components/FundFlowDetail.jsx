import React, { useState } from 'react';
import fundflowMain from '../images/fundflow.png'
import cardUi from '../images/card_ui.png'
import cardBadge from '../images/card_badge.png'
import cardAlarm from '../images/toast_ui.png'
import infiniteScroll from '../images/infinite_scroll.mp4'
import clsx from "clsx";

function FundFlowDetail() {
  const tabs = [
    { id: "card", label: "카드 UI" },
    { id: "badge", label: "뱃지 로직" },
    { id: "progress", label: "펀딩 게이지" },
    { id: "storage", label: "상태 유지" },
    { id: "loading", label: "무한 스크롤" },
  ];

  const [activeTab, setActiveTab] = useState("card");
  return (
    <section className="text-[20px]">
      <div className='mb-12'>
        <img src={fundflowMain} alt='펀딩 플랫폼 메인 이미지' />
      </div>

      <h1 className="mb-3 text-xl font-semibold">✔️ 주요 정보 및 기간</h1>

      <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff]">
        <div className="px-6 py-8 space-y-8 text-[16px] leading-relaxed text-textColor">

          {/* 프로젝트 기간 */}
          <p className="text-lg">
            📆 <strong className="text-gray-800">프로젝트 기간</strong> :
            <span className="ml-2 font-medium">
              2026.05 ~ 2026.05
            </span>
          </p>

          {/* 프로젝트 한줄 설명 */}
          <p className="text-base leading-relaxed">
            <span className="font-semibold text-[#06b088]">React · TypeScript</span> 기반으로
            프로젝트 탐색형 펀딩 플랫폼 UI를 구현한 프로젝트입니다. <br />

            프로젝트 상태에 따라 다른 UI를 제공하고,
            <span className="font-semibold text-[#06b088]"> 무한 스크롤 · Skeleton UI · 상태 기반 인터랙션</span>을 통해
            실제 서비스와 유사한 사용자 경험을 구현했습니다.
          </p>

          {/* 프로젝트 소개 */}
          <div className="p-6 bg-[#fbfaff] rounded-xl border-l-4 border-[#b7ccc7]">
            <h2 className="font-semibold text-lg mb-4">⭐ 프로젝트 소개</h2>

            <p className="text-base mb-4 leading-relaxed">
              이 프로젝트는 펀딩 플랫폼의 프로젝트 리스트 및 카드 UI를 구현한 프로젝트입니다.

              사용자가 다양한 프로젝트를 빠르게 탐색할 수 있도록
              <span className="font-semibold text-[#06b088]"> 상태 기반 UI 설계</span>와
              <span className="font-semibold text-[#06b088]"> 정보 우선순위 구조</span>를 중심으로 구현했습니다.
            </p>

            <p className="text-base mb-4 leading-relaxed">
              공개 예정 / 진행 중 상태에 따라 서로 다른 정보를 제공하고,
              프로젝트 카드 내 좋아요 · 알림 기능과 뱃지 노출 로직을 통해
              사용자 인터랙션 흐름을 자연스럽게 구성했습니다.
            </p>

            <p className="text-base mb-5 leading-relaxed font-medium text-gray-700">
              또한 무한 스크롤과 Skeleton UI를 적용해
              <span className="font-semibold text-[#06b088]">
                데이터 로딩 과정에서도 자연스러운 사용자 경험
              </span>
              을 제공하고자 했습니다.
            </p>

            <ul className="list-disc list-inside text-gray-700 px-6 space-y-2 text-[15px] leading-relaxed">
              <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                프로젝트 상태 기반
                <span className="font-semibold text-[#06b088]"> UI 분기 처리</span>
              </li>

              <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                <span className="font-semibold text-[#06b088]">IntersectionObserver</span> 기반
                무한 스크롤 구현
              </li>

              <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                Skeleton UI를 활용한
                <span className="font-semibold text-[#06b088]"> 로딩 UX 개선</span>
              </li>

              <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                API 레이어 분리 및
                <span className="font-semibold text-[#06b088]"> 커스텀 훅 기반 상태 관리</span>
              </li>
            </ul>
          </div>

          {/* 개발 환경 */}
          <div>
            <h2 className="font-semibold text-lg mb-3">⚙️ 개발 환경</h2>

            <ul className="flex flex-wrap gap-3 text-sm">
              {[
                "REACT",
                "TYPESCRIPT",
                "AXIOS",
                "INTERSECTION OBSERVER"
              ].map((item) => (
                <li
                  key={item}
                  className="px-4 py-1 bg-[#06b088] text-white rounded-full text-base tracking-wide"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 주요 구현 기능 */}
          <div>
            <h2 className="font-semibold text-lg mb-3">🧩 주요 구현 기능</h2>

            <ul className="list-disc list-inside text-gray-700 px-6 space-y-2 text-[15px] leading-relaxed">

              <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                프로젝트 상태별
                <span className="font-semibold text-[#06b088]"> 카드 UI 및 인터랙션</span> 구현
              </li>

              <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                좋은 창작자 · 마감 임박 · 후원 금액 등
                <span className="font-semibold text-[#06b088]"> 뱃지 노출 로직</span> 구현
              </li>

              <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                <span className="font-semibold text-[#06b088]">무한 스크롤</span> 기반
                프로젝트 리스트 자동 로딩 구현
              </li>

              <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                Skeleton UI를 활용한
                <span className="font-semibold text-[#06b088]"> 로딩 상태 UX 개선</span>
              </li>

              <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                공통 request 함수에서
                <span className="font-semibold text-[#06b088]"> 500 에러 재시도 처리</span> 구현
              </li>

            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-2">📎 배포 주소</h2>
            <a
              href="https://sohyun32253.github.io/FundFlow/"
              className="inline-block px-5 py-2 rounded-full bg-[#70bba9] text-white hover:bg-[#37db9a] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              웹사이트 방문하기 →
            </a>
          </div>

        </div>

        <div className="border border-skillBorder rounded-2xl shadow-lg  bg-[#f9f9f9]">
          <div className="px-6 py-8 text-textColor">
            {/* 탭 버튼들 */}
            <div className="md:flex gap-2 border-b pb-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={clsx(
                    "px-4 py-2 rounded-t-lg font-semibold transition-all mb-3 md:mb-0 md:mx-2",
                    activeTab === tab.id
                      ? "bg-[#23aa89] text-white"
                      : "bg-[#dbede9] text-[#0f886a] hover:bg-[#90d7c5]"
                  )}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 메인카드 */}
            {activeTab === "card" && (
              <div id="card" className="space-y-6">

                <div className="inline-block bg-[#dbede9] text-[#0f886a] font-semibold px-4 py-2 rounded-lg shadow-sm">
                  1. 프로젝트 카드 UI(Project Card UI)
                </div>

                <p className="text-sm text-gray-500">
                  ※ 프로젝트 상태 데이터에 따라 UI가 동적으로 변경되도록 구현했습니다.
                </p>

                <p className="text-base font-bold leading-relaxed text-[#3d3b50]">
                  사용자가 프로젝트 핵심 정보를 빠르게 탐색할 수 있도록 <br />
                  상태 기반 정보 구조와 인터랙션 중심으로 구현한 프로젝트 카드 UI입니다.
                </p>

                <ul className="list-disc list-inside px-6 space-y-2 text-[15px] leading-relaxed text-gray-700">

                  <li className="before:content-['❶'] before:mr-2 before:text-slate-400">
                    프로젝트 이미지 · 제목 · 크리에이터 정보 표시
                  </li>

                  <li className="before:content-['❷'] before:mr-2 before:text-slate-400">
                    공개 예정 / 진행 중 상태에 따른
                    <span className="text-[#0f886a] font-semibold"> UI 분기 처리</span>
                  </li>

                  <li className="before:content-['❸'] before:mr-2 before:text-slate-400">
                    좋아요 · 알림 · 크리에이터 링크 클릭 시
                    <span className="text-[#0f886a] font-semibold"> 이벤트 전파 제어</span>
                  </li>

                  <li className="before:content-['❹'] before:mr-2 before:text-slate-400">
                    프로젝트 상태에 따른
                    <span className="text-[#0f886a] font-semibold"> 뱃지 및 진행률 표시</span>
                  </li>

                  <li className="before:content-['❺'] before:mr-2 before:text-slate-400">
                    모바일 · 태블릿 · PC 환경을 고려한
                    <span className="text-[#0f886a] font-semibold"> 반응형 Grid Layout</span>
                  </li>

                </ul>

                <div className="mt-6">
                  <p className="text-sm text-gray-400 mb-2">📊 Preview</p>

                  <img
                    src={cardUi}
                    alt="FundFlow Project Card"
                    className="rounded-xl shadow-md border"
                  />
                </div>

              </div>
            )}
            {/* 뱃지 로직 */}
            {activeTab === "badge" && (
              <div id="badge" className="space-y-6">
                <div className="inline-block bg-[#dbede9] text-[#0f886a] font-semibold px-4 py-2 rounded-lg shadow-sm">
                  2. 뱃지 로직(Badge Logic)
                </div>

                <p className="text-sm text-gray-500">
                  ※ 프로젝트 상태 및 조건에 따라 뱃지가 동적으로 생성되도록 구현했습니다.
                </p>

                <p className="text-base font-bold leading-relaxed text-[#3d3b50]">
                  프로젝트의 핵심 상태를 빠르게 파악할 수 있도록 <br />
                  우선순위 기반 뱃지 노출 로직을 구현했습니다.
                </p>

                <ul className="list-disc list-inside px-6 space-y-2 text-[15px] leading-relaxed text-gray-700">
                  <li className="before:content-['❶'] before:mr-2 before:text-slate-400">
                    좋은 창작자 · 마감 임박 · 남은 기간 · 후원 금액 등
                    <span className="text-[#0f886a] font-semibold"> 조건별 뱃지 생성</span>
                  </li>
                  <li className="before:content-['❷'] before:mr-2 before:text-slate-400">
                    조건문 순서가 아닌
                    <span className="text-[#0f886a] font-semibold"> priority 기반 정렬 구조</span> 적용
                  </li>
                  <li className="before:content-['❸'] before:mr-2 before:text-slate-400">
                    중요도가 높은 뱃지만 노출될 수 있도록
                    <span className="text-[#0f886a] font-semibold"> 최대 2개 제한</span>
                  </li>
                  <li className="before:content-['❹'] before:mr-2 before:text-slate-400">
                    후원 금액 구간별
                    <span className="text-[#0f886a] font-semibold"> 단위 및 반올림 포맷팅 처리</span>
                  </li>
                </ul>

                <div className="mt-6">
                  <p className="text-sm text-gray-400 mb-2">📊 Preview</p>

                  <img
                    src={cardBadge}
                    alt="FundFlow Badge Logic"
                    className="rounded-xl shadow-md border"
                  />
                </div>

              </div>
            )}

            {/* 펀딩 게이지 */}
            {activeTab === "progress" && (
              <div id="progress" className="space-y-6">

                <div className="inline-block bg-[#dbede9] text-[#0f886a] font-semibold px-4 py-2 rounded-lg shadow-sm">
                  3. 펀딩 게이지(Funding Progress)
                </div>

                <p className="text-sm text-gray-500">
                  ※ 프로젝트 후원 금액 데이터를 기반으로 진행률이 동적으로 계산됩니다.
                </p>

                <p className="text-base font-bold leading-relaxed text-[#3d3b50]">
                  목표 금액 대비 현재 후원 금액을 시각적으로 확인할 수 있도록 <br />
                  펀딩 진행률 기반 게이지 UI를 구현했습니다.
                </p>

                <ul className="list-disc list-inside px-6 space-y-2 text-[15px] leading-relaxed text-gray-700">

                  <li className="before:content-['❶'] before:mr-2 before:text-slate-400">
                    현재 후원 금액 / 목표 금액 기반
                    <span className="text-[#0f886a] font-semibold"> 진행률 계산</span>
                  </li>

                  <li className="before:content-['❷'] before:mr-2 before:text-slate-400">
                    진행률에 따라
                    <span className="text-[#0f886a] font-semibold"> 게이지 바 width 동적 반영</span>
                  </li>

                  <li className="before:content-['❸'] before:mr-2 before:text-slate-400">
                    UI 안정성을 위해
                    <span className="text-[#0f886a] font-semibold"> 최대 100% 제한 처리</span>
                  </li>

                  <li className="before:content-['❹'] before:mr-2 before:text-slate-400">
                    프로젝트 상태에 따른
                    <span className="text-[#0f886a] font-semibold"> 퍼센트 및 금액 정보 표시</span>
                  </li>

                </ul>

                <div className="mt-6">
                  <p className="text-sm text-gray-400 mb-2">📊 Preview</p>

                  <img
                    src={fundflowMain}
                    alt="FundFlow Progress Bar"
                    className="rounded-xl shadow-md border"
                  />
                </div>

              </div>
            )}

            {/* 상태 유지 */}
            {activeTab === "storage" && (
              <div id="storage" className="space-y-6">

                <div className="inline-block bg-[#dbede9] text-[#0f886a] font-semibold px-4 py-2 rounded-lg shadow-sm">
                  4. 상태 유지(State Persistence)
                </div>

                <p className="text-sm text-gray-500">
                  ※ 사용자 인터랙션 상태를 localStorage에 저장하도록 구현했습니다.
                </p>

                <p className="text-base font-bold leading-relaxed text-[#3d3b50]">
                  좋아요 및 알림 신청 상태가 새로고침 이후에도 유지될 수 있도록 <br />
                  localStorage 기반 상태 관리 기능을 구현했습니다.
                </p>

                <ul className="list-disc list-inside px-6 space-y-2 text-[15px] leading-relaxed text-gray-700">

                  <li className="before:content-['❶'] before:mr-2 before:text-slate-400">
                    프로젝트별 고유 key 기반
                    <span className="text-[#0f886a] font-semibold"> 상태 저장 구조</span> 구현
                  </li>

                  <li className="before:content-['❷'] before:mr-2 before:text-slate-400">
                    좋아요 및 알림 상태 변경 시
                    <span className="text-[#0f886a] font-semibold"> localStorage 동기화</span>
                  </li>

                  <li className="before:content-['❸'] before:mr-2 before:text-slate-400">
                    새로고침 이후에도
                    <span className="text-[#0f886a] font-semibold"> 사용자 상태 유지</span>
                  </li>

                  <li className="before:content-['❹'] before:mr-2 before:text-slate-400">
                    상태 기반 버튼 스타일 및 텍스트 변경 처리
                  </li>

                </ul>

                <div className="mt-6">
                  <p className="text-sm text-gray-400 mb-2">📊 Preview</p>

                  <img
                    src={cardAlarm}
                    alt="FundFlow LocalStorage"
                    className="rounded-xl shadow-md border"
                  />
                </div>

              </div>
            )}

            {/* 무한 스크롤 */}
            {activeTab === "loading" && (
              <div id="loading" className="space-y-6">

                <div className="inline-block bg-[#dbede9] text-[#0f886a] font-semibold px-4 py-2 rounded-lg shadow-sm">
                  5. 무한 스크롤(Infinite Scroll)
                </div>

                <p className="text-sm text-gray-500">
                  ※ IntersectionObserver 기반으로 자동 로딩되도록 구현했습니다.
                </p>

                <p className="text-base font-bold leading-relaxed text-[#3d3b50]">
                  사용자가 자연스럽게 프로젝트를 탐색할 수 있도록 <br />
                  무한 스크롤 및 Skeleton UI 기반 로딩 구조를 구현했습니다.
                </p>

                <ul className="list-disc list-inside px-6 space-y-2 text-[15px] leading-relaxed text-gray-700">

                  <li className="before:content-['❶'] before:mr-2 before:text-slate-400">
                    <span className="text-[#0f886a] font-semibold">IntersectionObserver</span>
                    기반 자동 로딩 구현
                  </li>

                  <li className="before:content-['❷'] before:mr-2 before:text-slate-400">
                    page 기반 API 구조를 활용한
                    <span className="text-[#0f886a] font-semibold"> 확장 가능한 리스트 구조</span>
                  </li>

                  <li className="before:content-['❸'] before:mr-2 before:text-slate-400">
                    loading / loadingMore 상태 분리를 통한
                    <span className="text-[#0f886a] font-semibold"> UX 개선</span>
                  </li>

                  <li className="before:content-['❹'] before:mr-2 before:text-slate-400">
                    Skeleton UI를 활용해
                    <span className="text-[#0f886a] font-semibold"> 레이아웃 흔들림 최소화</span>
                  </li>

                  <li className="before:content-['❺'] before:mr-2 before:text-slate-400">
                    hasMore 조건을 활용한
                    <span className="text-[#0f886a] font-semibold"> 중복 요청 방지 처리</span>
                  </li>

                </ul>

                <div className="mt-6">
                  <p className="text-sm text-gray-400 mb-2">📊 Preview</p>

                  <video controls width="100%">
                    <source src={infiniteScroll} type="video/mp4" />
                    브라우저가 video 태그를 지원하지 않습니다.
                  </video>
                </div>
              </div>
            )}
      {/* 기타 문서 */}
      <section className="mt-8">
        <h2 className="mb-2 font-semibold text-base">📜 기타 문서</h2>
        <a
          href="https://github.com/sohyun32253/FundFlow"
          className="inline-block px-5 py-2 rounded-full bg-[#70bba9] text-white hover:bg-[#32ab8f] transition text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 깃허브 바로가기 →
        </a>
      </section>
          </div>
        </div>
      </div>

    </section>
  );
}

export default FundFlowDetail;