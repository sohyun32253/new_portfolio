import React, { useState } from 'react';
import saltrainMain from '../images/saltrain_preview.png'

function SaltrainDetail() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const features = [
        {
            title: '메인페이지 반응형 헤더 및 푸터 개발',
            detail: '데스크톱·태블릿·모바일 등 다양한 기기 환경에 맞춰 반응형으로 구현했으며, 모바일에서는 햄버거 메뉴로 구성해 사용 편의성을 높였습니다.'
        },
        {
            title: 'About 페이지 레이아웃 디자인 및 개발 ',
            detail: '기업의 브랜드 콘셉트에 맞춰 페이지 레이아웃을 디자인하고, 다양한 트랜지션 효과를 적용해 시각적 완성도와 사용자 몰입감을 높였습니다.'
        },
        {
            title: '메인 페이지 검색창 UI 구현',
            detail: '사용자가 원하는 정보를 쉽고 빠르게 찾을 수 있도록 팝업형 검색바 UI를 구현하였습니다.'
        },
    ];

    return (
        <section className='text-[20px]'>
            <div className='mb-10'>
                <img src={saltrainMain} alt='솔트레인 메인 이미지' />
            </div>

            <h1 className="mb-3 text-xl font-semibold">✔️ 주요 정보 및 기간</h1>
            <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff]">
                <div className="px-6 py-8 space-y-6 text-[16px] leading-relaxed text-textColor">

                    {/* 기간 */}
                    <p className="text-lg">
                    📆 <strong className="text-gray-800">프로젝트 기간</strong> : 2024.07.18 ~ 2024.08.16
                    </p>

                    {/* 개발 목표 */}
                    <div>
                    <h2 className="font-semibold text-lg mb-2">🎯 개발 목표</h2>
                    <ul className="list-disc list-inside text-gray-700 px-9">
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">스크립트를 활용한 사용자 상호작용 강화와 전반적인 웹사이트 리뉴얼</li>
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">Vue.js 기반으로 구현한 반응형 웹사이트 개발</li>
                    </ul>
                    </div>

                    {/* 개발 환경 */}
                    <div>
                    <h2 className="font-semibold text-lg mb-2">⚙️ 개발 환경</h2>
                    <ul className="flex flex-wrap gap-3 text-base px-8">
                        {['HTML5', 'CSS3', 'JAVASCRIPT',  'VUE3', 'VUETIFY', 'VUECLI', 'VITE','FIREBASE'].map((item) => (
                        <li
                            key={item}
                            className="px-4 py-1 bg-[#70707a] text-white  rounded-full"
                        >
                            {item}
                        </li>
                        ))}
                    </ul>
                    </div>

                    {/* 프로젝트 소개 */}
                    <div>
                    <h2 className="font-semibold text-lg mb-2">⭐ 프로젝트 소개</h2>
                    <ul className="list-disc list-inside text-gray-700 px-9">
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">라이프스타일 브랜드 ‘솔트레인’의 기존 웹사이트를 리뉴얼한 협업 프로젝트</li>
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">기존 브랜드 컨셉을 유지하면서도, 개선된 UI와 퍼블리싱으로 완성도 향상</li>
                    </ul>
                    </div>

                    {/* 배포 주소 */}
                    <div>
                    <h2 className="font-semibold text-lg mb-2">🌐 배포 주소</h2>
                    <a
                        href="https://saltrain-a74c4.web.app/"
                        className="inline-block px-5 py-2 rounded-full bg-pointColor text-white hover:bg-[#825ff7] transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        웹사이트 방문하기 →
                    </a>
                    </div>
                </div>
            </div>

            {/* 주요 기능 소개 */}
            <h1 className="mb-3 text-xl font-semibold">✔️ 주요 기능 소개</h1>
            <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff]">
            <ul className="px-6 py-8 space-y-3 text-gray-800 text-[16px]">
                {features.map((feature, index) => (
                <li key={index} className="border rounded-xl p-4 bg-white hover:shadow-md transition-all duration-300">
                    <button
                    className="w-full text-left font-semibold flex justify-between items-center"
                    onClick={() => toggle(index)}
                    >
                    <span className="flex items-center gap-2 ">
                        💡 {feature.title}
                    </span>
                    <span className="text-sm">{openIndex === index ? '▲' : '▼'}</span>
                    </button>

                    <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index ? 'max-h-[400px] mt-3 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-[0.98]'
                    }`}
                    >
                        <p className="bg-[#f3f4f6] p-4 rounded-md text-gray-700 text-base">
                            {feature.detail}
                        </p>
                    </div>
                </li>
                ))}
            </ul>
            </div>

            {/* 협업 도구 */}
            <h1 className="mb-3 text-xl font-semibold">✔️ 협업 도구 및 방식</h1>
            <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff] px-6 py-8">
                <p className="text-gray-800">
                    🛠 사용 도구 : <span className="font-medium">GitHub, Figma</span>
                </p>
            </div>

            {/* 트러블 슈팅 */}
            <h1 className="mb-3 text-xl font-semibold">✔️ 트러블 슈팅</h1>
            <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff] px-6 py-8 space-y-6">

                {/* 문제 */}
                <section>
                    <h2 className="mb-2 font-semibold text-xl"> <span className="text-rose-600">💥</span> 문제</h2>
                    <p className="text-base">
                    Vue.js를 처음 도입한 프로젝트에서 템플릿/디렉티브 문법 적응, GitHub 협업 프로세스 미숙,
                    GitHub Pages 배포 실패 등 초기 환경 적응 이슈가 동시에 발생했습니다.
                    </p>
                </section>

                {/* 원인 및 고민 */}
                <section>
                    <h2 className="mb-2 font-semibold text-xl">🤔 원인 및 고민</h2>
                    <ul className="list-disc list-inside text-gray-800 text-base space-y-1 px-8 leading-loose">
                    <li>✔️ 기존 HTML과 다른 Vue 템플릿 구조와 컴포넌트 분리 방식이 생소함</li>
                    <li>✔️ 브랜치 전략/PR 리뷰/merge conflict 처리 등 GitHub 협업 흐름 경험 부족</li>
                    <li>✔️ SPA 특성상 GitHub Pages에서 라우팅(404)·에셋 경로 등 환경 설정 이슈 발생</li>
                    </ul>
                </section>

                {/* 해결 방법 */}
                <section>
                <h2 className="mb-2 font-semibold text-xl">💡 해결 방법</h2>
                <ul className="list-disc list-inside text-base text-gray-800 space-y-1 px-9 leading-loose">
                    <li className="before:content-['•'] before:mr-2 before:text-slate-400"><span className="font-semibold">Vue 적용 :</span> 공식 문서/가이드 예제를 기준으로 컴포넌트 단위로 화면을 재구성하며 경험을 늘렸습니다.</li>
                    <li className="before:content-['•'] before:mr-2 before:text-slate-400"><span className="font-semibold">협업 정착 :</span> 팀 내 브랜치 규칙과 PR 템플릿을 정의하고, 초기 작업 시 신중하게 논의하여 충돌을 최소화했습니다.</li>
                    <li className="before:content-['•'] before:mr-2 before:text-slate-400"><span className="font-semibold">배포 전환 :</span> GitHub Pages 문제로 Firebase Hosting으로 전환, 빌드 아웃풋 설정을 정리해 배포에 성공했습니다.</li>
                </ul>
                </section>

                {/* 디자이너 협업 */}
                <div className="rounded-xl border-l-4 border-sky-400 bg-sky-50 px-5 py-4">
                    <h3 className="mb-2 text-sky-700 font-semibold text-lg">🎨 디자이너와의 협업</h3>
                    <p className='text-base leading-loose'>팀원 중 한 명이 전직 디자이너 출신이어서, 해당 팀원과 긴밀히 소통하며 프로젝트의 브랜드 컨셉과 톤앤매너를 정의했습니다. <br />
                    이를 기반으로 레이아웃, 컬러, 인터랙션 방향성을 조율하고, 디자인 기본 가이드(타이포그래피, 간격, 상태 표현 등)를 함께 고민하며 발전시켰습니다. <br />
                    이러한 협업을 통해 개발과 디자인 간의 일관성을 높이고, 사용자 경험을 향상시킬 수 있었습니다.</p>
                </div>

                {/* 선택 이유 & 장점 (배포) */}
                <section>
                    <h2 className="mb-2 font-semibold text-lg">✅ Firebase Hosting 전환 이유 및 장점</h2>
                    <ul className="list-decimal list-inside text-gray-800 text-base px-8 leading-loose">
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">SPA 라우팅 지원이 용이하여 404/리프레시 이슈 해결</li>
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">간단한 CLI 기반 배포로 팀원 누구나 동일 프로세스로 배포 가능</li>
                        <li className="before:content-['•'] before:mr-2 before:text-slate-400">환경 설정이 명확해 에셋 경로/캐시 정책 관리가 편리</li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-2 font-semibold text-base">📜 기타 문서</h2>
                    <a
                    href="https://github.com/sohyun32253/saltrain"
                    className="inline-block px-5 py-2 rounded-full bg-pink-300 text-white hover:bg-[#825ff7] transition text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    💻 제가 맡은 파트가 궁금하다면 →
                    </a>
                </section>
            </div>
        </section>
    );
}

export default SaltrainDetail;
