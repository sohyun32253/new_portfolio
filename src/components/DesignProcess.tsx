// components/DesignProcess.tsx
"use client";

import { useState } from "react";
import referenceImage from "../images/reference.png";
import visualIdentityImage from "../images/concept.png";
import siteMapImage from "../images/sitemap.png";;
import responsiveGridImage from "../images/responsible.png";
import uiDesignImage from "../images/layout.png";
type PageIndex = 0 | 1;

const steps = [
  { number: "01", title: "Reference", page: 0 },
  { number: "02", title: "Visual Identity", page: 0 },
  { number: "03", title: "Site Map", page: 0 },
  { number: "04", title: "Responsive Grid", page: 1 },
  { number: "05", title: "UI Design", page: 1 },
] as const;

const processItems = [
  {
    number: "01",
    title: "Reference",
    description:
      "동종 브랜드의 웹사이트와 UI 사례를 분석해 디자인 방향성을 정리했습니다.",
    image: referenceImage,
  },
  {
    number: "02",
    title: "Visual Identity",
    description:
      "브랜드의 기존 이미지를 유지하며 컬러와 타이포그래피 기준을 정의했습니다.",
    image: visualIdentityImage,
  },
  {
    number: "03",
    title: "Information Architecture",
    description:
      "사용자가 원하는 정보에 빠르게 접근할 수 있도록 메뉴와 페이지 구조를 설계했습니다.",
    image: siteMapImage,
  },
  {
    number: "04",
    title: "Responsive Grid",
    description:
      "Mobile, Tablet, Desktop 환경에 맞는 반응형 그리드 시스템을 정의했습니다.",
    image: responsiveGridImage,
  },
  {
    number: "05",
    title: "UI Design & Layout",
    description:
      "앞서 정의한 디자인 기준과 콘텐츠 우선순위를 바탕으로 최종 UI를 설계했습니다.",
    image: uiDesignImage,
  },
] as const;

export default function DesignProcess() {
  const [currentPage, setCurrentPage] = useState<PageIndex>(0);

  const visibleItems =
    currentPage === 0
      ? processItems.slice(0, 3)
      : processItems.slice(3, 5);

  return (
    <section className="min-h-screen bg-[#f7f5f3] px-5 py-10 text-[#6f65c0] md:px-10 lg:h-screen lg:overflow-hidden lg:px-16">
      <div className="mx-auto flex h-full max-w-[1440px] flex-col p-10">
        {/* Header */}
        <header className="mb-7 flex flex-col justify-between gap-7 border-b border-black/10 pb-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold tracking-[0.24em] text-[#968fcb]">
              GONG CHA WEBSITE REDESIGN
            </p>

            <h1 className="text-3xl font-bold tracking-[-0.05em] md:text-[32px]">
              Design Process
            </h1>

            <p className="mt-3 text-medium text-[#908bb5]">
              From brand research to responsive UI design
            </p>
          </div>

          {/* Process navigation */}
          <nav
            aria-label="Design process"
            className="grid grid-cols-5 gap-2 sm:gap-5"
          >
            {steps.map((step, index) => {
              const isActive = step.page === currentPage;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setCurrentPage(step.page)}
                  className="group text-left"
                >
                  <span
                    className={`mb-2 block h-[2px] transition-colors ${
                      isActive
                        ? "bg-[#8A93CC]"
                        : "bg-black/10 group-hover:bg-black/30"
                    }`}
                  />

                  <span
                    className={`block text-[9px] font-semibold ${
                      isActive ? "text-[#8A93CC]" : "text-[#aaa19e]"
                    }`}
                  >
                    {step.number}
                  </span>

                  <span
                    className={`mt-1 hidden text-[10px] sm:block ${
                      isActive
                        ? "font-medium text-[#211b19]"
                        : "text-[#968c89]"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </nav>
        </header>

        {/* Contents */}
            <div
            key={currentPage}
            className={`grid gap-5 flex-1 animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                currentPage === 0
                ? "lg:grid-cols-3"
                : "lg:grid-cols-2"
            }`}
            >
          {visibleItems.map((item) => (
            <article
            key={item.number}
            className="group flex h-[340px] min-w-0 flex-col rounded-[24px]
                        border border-black/[0.07] bg-white p-5
                        shadow-[0_20px_60px_rgba(35,18,14,0.06)]"
            >
            <div className="mb-5 flex min-h-[76px] items-start gap-3">
                <span className="pt-0.5 text-[14px] font-semibold tracking-wider text-[#8A93CC]">
                {item.number}
                </span>

                <div className="min-w-0 flex-1">
                <h2 className="text-[18px] font-semibold text-[#646989]">
                    {item.title}
                </h2>

                <p className="mt-2 break-keep text-sm leading-5 text-[#7d7370]">
                    {item.description}
                </p>
                </div>
            </div>

            <div
            className={`min-h-0 overflow-hidden rounded-[20px] bg-white ${
                item.number === "04"
                ? "h-[355px]"
                : "flex-1"
            }`}
            >
            <img 
                src={item.image} 
                alt={item.title} 
                className={`h-full w-full object-contain ${
                item.number === "05"
                    ? "scale-[1.45]"
                    : item.number === "04"
                    ? "scale-[1.35]"
                    : ""
                }`}
            />
            </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <footer className="mt-6 flex items-center justify-between">
          <p className="text-[10px] font-semibold tracking-[0.18em] text-[#9d9390]">
            DESIGN PROCESS · 0{currentPage + 1} / 02
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              disabled={currentPage === 0}
              onClick={() => setCurrentPage(0)}
              className="rounded-full border border-black/10 px-5 py-2.5 text-xs transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              ← Prev
            </button>

            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
              className="rounded-full bg-[#9f94ef] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#8071f3] disabled:cursor-not-allowed disabled:bg-black/10 disabled:text-black/30"
            >
              Next →
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}