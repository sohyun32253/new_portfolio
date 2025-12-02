import { useState } from "react";
import clsx from "clsx";
import brunchpayImg01 from "../images/brunchpay_main.png";
import brunchpayImg02 from "../images/brunchpay_transaction.png";
import brunchpayImg03 from "../images/brunchpay_merchants.png";
import brunchpayImg04 from "../images/brunchpay_invoice.png";
import brunchPayDemo from "../images/pays-dashboard.mp4";

export default function BrunchPayDetail() {
  const tabs = [
    { id: "main", label: "대시보드" },
    { id: "transaction", label: "거래내역" },
    { id: "merchants", label: "가맹점 정보" },
    { id: "invoice", label: "인보이스 관리" },
    { id: "video", label: "시연 영상" },
  ];

  const [activeTab, setActiveTab] = useState("main");

  return (
    <section className="text-[20px]">
      <h1 className="mb-3 text-xl font-semibold">✔️ 주요 정보 및 기간</h1>
      <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff]">
        <div className="px-6 py-8 space-y-6 text-[16px] leading-relaxed text-textColor">
          <p className="text-lg">
            📆 <strong className="text-gray-800">프로젝트 기간</strong> : 2025.11.17 ~ 2025.11.21
          </p>
            <div className="p-5 bg-[#fbfaff] rounded-xl border-l-4 border-skill03">
            <h2 className="font-semibold text-lg mb-3">⭐ 프로젝트 소개</h2>

            <p className="text-base mb-3 leading-relaxed">
                이 프로젝트는 기업에서 제공한 <span className="font-semibold text-[#6f53ff]">채용 전용 API</span>를 활용해,<br />
                <span className="font-semibold text-[#6f53ff]">결제대행사(PG) 도메인의 관리자(Admin) 대시보드</span>를
                실제 서비스와 유사하게 구현한 실무형 과제 프로젝트입니다.
            </p>

            <p className="text-base mb-3 leading-relaxed">
                PG 시스템은 다양한 결제 흐름·상태 관리가 핵심이기 때문에,<br />
                관리자 화면에서는 <span className="font-semibold">대시보드 시각화 · 가맹점 관리 · 거래 내역 · 정산 관리</span> 등
                핵심 정보들이 명확하게 구성되어야 합니다.
            </p>

            <p className="text-base mb-4 leading-relaxed font-medium text-gray-700">
                본 프로젝트에서는 다음 목표를 중심으로 구현했습니다.
            </p>

            <ul className="list-disc list-inside text-gray-700 px-6 space-y-2 text-[15px] leading-relaxed">
                <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                실제 관리자 페이지가 갖춰야 할 <span className="font-semibold">정보 구조(UI/UX)</span> 재현
                </li>
                <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                <span className="font-semibold">실시간 API 연동</span>을 통한 데이터 중심 기능 구현
                </li>
                <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                테이블 · 차트 · 카드 UI를 활용한 <span className="font-semibold">대시보드 시각화</span>
                </li>
                <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                <span className="font-semibold">PG 도메인</span>에 기반한 거래 · 정산 흐름 구조화
                </li>
            </ul>
            </div>
          <div>
            <h2 className="font-semibold text-lg mb-2">⚙️ 개발 환경</h2>
            <ul className="flex flex-wrap gap-3 text-base">
              {["REACT", "TYPESCRIPT", "VITE", "TAILWINDCSS", "AXIOS"].map(
                (item) => (
                  <li
                    key={item}
                    className="px-4 py-1 bg-[#787fcd] text-white rounded-full"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* 탭 + 내용 영역 */}
      <div className="border border-skillBorder rounded-2xl shadow-lg mb-12 bg-[#f9f9f9]">
        <div className="px-6 py-8 text-textColor">
          {/* 탭 버튼들 */}
          <div className="md:flex gap-2 border-b pb-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={clsx(
                  "px-4 py-2 rounded-t-lg font-semibold transition-all mb-3 md:mb-0 md:mx-2",
                  activeTab === tab.id
                    ? "bg-subBackground text-white"
                    : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                )}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 메인페이지(대시보드) */}
            {activeTab === "main" && (
            <div id="main" className="space-y-6">

                <div className="inline-block bg-[#f1efff] text-[#4639ad] font-semibold px-4 py-2 rounded-lg border border-[#dcd7ff] shadow-sm">
                1. 대시보드(Dashboard)
                </div>

                <p className="text-sm text-gray-500">
                ※ 백엔드 API와 연동하여 실제 데이터 기반으로 동작하는 페이지입니다.
                </p>

                <p className="text-base font-bold leading-relaxed text-[#3d3b50]">
                관리자에게 필요한 결제 지표를 빠르게 파악할 수 있도록<br />
                주요 정보를 시각화한 메인 대시보드입니다.
                </p>

                <ul className="list-disc list-inside px-6 space-y-2 text-[15px] leading-relaxed text-gray-700">
                <li className="before:content-['❶'] before:mr-2 before:text-slate-400">결제 요약 카드 <span className="text-purple-700 font-semibold">(Total/SUCCESS/FAILED/CANCELLED)</span></li>
                <li className="before:content-['❷'] before:mr-2 before:text-slate-400">월렛 밸런스(Wallet Balance)</li>
                <li className="before:content-['❸'] before:mr-2 before:text-slate-400">결제 상태 비율 <span className="text-purple-700 font-semibold">(Doughnut Chart)</span></li>
                <li className="before:content-['❹'] before:mr-2 before:text-slate-400">최근 결제 내역 4개</li>
                <li className="before:content-['❺'] before:mr-2 before:text-slate-400">결제 트렌드 <span className="text-purple-700 font-semibold">(Bar Chart)</span></li>
                </ul>

                <div className="mt-6">
                <p className="text-sm text-gray-400 mb-2">📊 Preview</p>
                <img src={brunchpayImg01} alt="BrunchPay Dashboard" className="rounded-xl shadow-md border" />
                </div>
            </div>
            )}

          {/* 거래 내역 */}
          {activeTab === "transaction" && (
            <div id="transaction" className="space-y-6">
              <div className="inline-block bg-[#f1efff] text-[#4639ad] font-semibold px-4 py-2 rounded-lg border border-[#dcd7ff] shadow-sm">
                2. 거래 내역(Transaction List)
              </div>
              <p className="text-sm text-gray-500 mt-2 mb-4">
                ※ 해당 페이지는 백엔드 API와 연동하여 실제 데이터와 연결한 페이지입니다.
              </p>
              <p className="text-base font-bold mt-2 mb-4">
                실제 서비스 운영에서 가장 많이 조회되는 기능으로, <br />
                거래 정보·상태값·수단별 분류를 즉시 확인할 수 있도록 구성했습니다.
              </p>
              <div className="mb-10">
                <ul className="list-disc list-inside px-6 space-y-2 text-[15px] leading-relaxed text-gray-700">
                  <li className="before:content-['❶'] before:mr-2 before:text-slate-400">
                    /payments/list API 연동
                  </li>
                  <li className="before:content-['❷'] before:mr-2 before:text-slate-400">
                    ID, 일자(Date), 가맹점(store), 금액(Amount), 결제수단(PayType),
                    상태(Status) 표시
                  </li>
                  <li className="before:content-['❸'] before:mr-2 before:text-slate-400">
                    최신순 정렬 및 금액/날짜 포맷팅 적용
                  </li>
                </ul>
                <div className="mt-6">
                <p className="text-sm text-gray-400 mb-2">📊 Preview</p>
                <img src={brunchpayImg02} alt="BrunchPay Dashboard" className="rounded-xl shadow-md border" />
                </div>
              </div>
            </div>
          )}

          {/* 가맹점 정보 */}
          {activeTab === "merchants" && (
            <div id="merchants" className="space-y-6">
              <div className="inline-block bg-[#f1efff] text-[#4639ad] font-semibold px-4 py-2 rounded-lg border border-[#dcd7ff] shadow-sm">
                3. 가맹점 정보(Merchants Information)
              </div>
              <p className="text-sm text-gray-500 mt-2 mb-4">
                ※ 해당 페이지는 백엔드 API와 연동하여 실제 데이터와 연결한 페이지입니다.
              </p>
              <p className="text-base font-bold mt-2 mb-4">
                PG 시스템에서 핵심 도메인인 가맹점 단위의 정보 관리가 가능한 구조로 설계했습니다.
              </p>
              <div className="mb-10">
                <ul className="list-disc list-inside px-6 space-y-2 text-[15px] leading-relaxed text-gray-700">
                  <li className="before:content-['❶'] before:mr-2 before:text-slate-400">
                    /merchants/list API 연동
                  </li>
                  <li className="before:content-['❷'] before:mr-2 before:text-slate-400">
                    가맹점 코드, 이름, 상태, 업종의 기본 테이블 구성
                  </li>
                  <li className="before:content-['❸'] before:mr-2 before:text-slate-400">
                    PG 도메인에서 활용되는 데이터 형태에 맞게 시각적 구성
                  </li>
                </ul>
                <div className="mt-6">
                <p className="text-sm text-gray-400 mb-2">📊 Preview</p>
                <img src={brunchpayImg03} alt="BrunchPay Dashboard" className="rounded-xl shadow-md border" />
                </div>
              </div>
            </div>
          )}

          {/* 인보이스 관리 */}
          {activeTab === "invoice" && (
            <div id="invoice" className="space-y-6">
              <div className="inline-block bg-[#f1efff] text-[#4639ad] font-semibold px-4 py-2 rounded-lg border border-[#dcd7ff] shadow-sm">
                4. 인보이스 관리(Invoice Management)
              </div>
              <div className="text-sm text-gray-500 mt-2 mb-4">
                ※ 해당 페이지는 MOCK 데이터 기반으로 구현되었습니다.
              </div>
              <p className="text-base font-bold mt-2 mb-4">
                정산 페이지는 데이터를 통한 금액 검증·기간별 정산 등 실무요소가 많아 <br />
                Mock 데이터 구조 분석 후 정산 페이지 포맷을 재현했습니다.
              </p>              
              <div className="mb-10">
                <ul className="list-disc list-inside px-6 space-y-2 text-[15px] leading-relaxed text-gray-700">
                  <li className="before:content-['❶'] before:mr-2 before:text-slate-400">
                    API가 제공되지 않는 항목이므로 Mock 데이터 사용
                  </li>
                  <li className="before:content-['❷'] before:mr-2 before:text-slate-400">
                    Invoice Code / Merchant / Period / Total Amount / Status
                    표시
                  </li>
                  <li className="before:content-['❸'] before:mr-2 before:text-slate-400">
                    실제 PG 정산 페이지 포맷을 참고하여 UI 구성
                  </li>
                </ul>
                <div className="mt-6">
                <p className="text-sm text-gray-400 mb-2">📊 Preview</p>
                <img src={brunchpayImg04} alt="BrunchPay Dashboard" className="rounded-xl shadow-md border" />
                </div>
              </div>
            </div>
          )}

          {/* 시연 영상 */}
          {activeTab === "video" && (
            <div id="video" className="space-y-6">
                <div className='mb-10'>
                <p className='mb-2 font-bold'>🖥 시연 영상</p>
                <p className="px-4 mb-4 text-base">로컬 서버에서 실제 동작을 캡처한 시연 화면입니다.</p>
                <p className="text-sm text-gray-400 mb-2">📊 Video</p>
                <video controls width="100%">
                    <source src={brunchPayDemo} type="video/mp4" />
                    브라우저가 video 태그를 지원하지 않습니다.
                </video>
                </div>
            </div>
        )}
        </div>
      </div>

        <h1 className="mb-3 text-xl font-semibold">✔️ 핵심 구현 포인트</h1>

        <div className="mb-10 border px-6 py-8 border-skillBorder rounded-2xl shadow-md bg-[#fdfcff] text-[15px] leading-relaxed">
            <p className="text-base mb-5 font-medium text-gray-700">
                본 프로젝트에서는 단순한 UI 구현을 넘어,  
                <span className="text-[#6f53ff] font-semibold"> 데이터 처리 구조와 PG 도메인 이해를 기반으로 한 관리자 경험 개선</span>에 중점을 두었습니다.
            </p>

            <ul className="space-y-4 text-gray-800">
                <li className="before:content-['•'] before:mr-3 before:text-slate-400">
                    <span className="font-semibold text-[#4b47d1]">실제 관리자 흐름 기반의 데이터 처리</span><br/>
                    필터링 · 정렬 · 상태 매핑 등을 API 응답 구조에 맞게 직접 가공하여  
                    관리자 화면에서 <span className="font-medium">즉시 활용 가능한 정보 흐름</span>을 구현했습니다.
                </li>
                <li className="before:content-['•'] before:mr-3 before:text-slate-400">
                    <span className="font-semibold text-[#4b47d1]">데이터 의미가 드러나는 UI 설계</span><br/>
                    금액/날짜 포맷팅, 상태값 색상 라벨, 정렬 방식 등을 적용해  
                    복잡한 결제 데이터를 <span className="font-medium">빠르게 읽히는 구조</span>로 구성했습니다.
                </li>
                <li className="before:content-['•'] before:mr-3 before:text-slate-400">
                    <span className="font-semibold text-[#4b47d1]">대시보드 시각화를 통한 직관성 강화</span><br/>
                    Doughnut · Bar 차트를 사용하여  
                    전체 결제 흐름과 상태 비율을 한눈에 파악할 수 있도록 <span className="font-medium">시각적 인사이트 제공</span>.
                </li>
                <li className="before:content-['•'] before:mr-3 before:text-slate-400">
                    <span className="font-semibold text-[#4b47d1]">Mock 기반 정산 페이지 구조 분석</span><br/>
                    API가 제공되지 않는 정산 데이터는 Mock을 직접 설계하고  
                    실제 PG 정산 페이지 포맷을 참고해 <span className="font-medium">실무에 근접한 구조</span>로 재구성했습니다.
                </li>
            </ul>
        </div>

      {/* 기타 문서 */}
      <section>
        <h2 className="mb-2 font-semibold text-base">📜 기타 문서</h2>
        <a
          href="https://github.com/sohyun32253/Pays_dashboard"
          className="inline-block px-5 py-2 rounded-full bg-violet-300 text-white hover:bg-[#825ff7] transition text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 더 자세한 내용이 궁금하다면 →
        </a>
      </section>
    </section>
  );
}
