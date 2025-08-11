import React, { useState } from 'react';
import maeilMain from '../images/maeil_preview.png'

function MaeilDetail() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const features = [
        {
            title: '메인페이지 전체 레이아웃 디자인',
            detail: '매일유업의 청량하고 깨끗한 브랜드 이미지를 반영하여 메인페이지 레이아웃을 새롭게 설계하고 리뉴얼했습니다.'
        },
        {
            title: '메인페이지 PRODUCT 섹션 일러스트레이션 작업',
            detail: '브랜드 제품을 Illustrator로 직접 제작한 일러스트로 표현하여 시각적 완성도를 높였습니다.'
        },
        {
            title: '메인 페이지 01 ~ 04 퍼블리싱',
            detail: '브랜드 가치와 스토리를 담은 각 섹션을 퍼블리싱하고, 간단한 인터랙션을 적용해 사용자의 몰입도를 높였습니다.'
        },
        {
            title: '서브 페이지 - IR, PR, 기타',
            detail: '기존 서브 페이지의 일부 디자인을 개선하고, 사용자 경험을 강화하는 인터랙션을 추가했습니다.'
        },
    ];

    return (
        <section className='text-[20px]'>
            <div className='mb-10'>
                <img src={maeilMain} alt='솔트레인 메인 이미지' />
            </div>

            <h1 className="mb-3 text-xl font-semibold">✔️ 주요 정보 및 기간</h1>
            <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff]">
                <div className="px-6 py-8 space-y-6 text-[16px] leading-relaxed text-textColor">
                    {/* 기간 */}
                    <p className="text-lg">
                    📆 <strong className="text-gray-800">프로젝트 기간</strong> : 2024.05.28 ~ 2024.06.28 
                    </p>

                    {/* 개발 목표 */}
                    <div>
                        <h2 className="font-semibold text-lg mb-2">🎯 개발 목표</h2>
                        <ul className="list-disc list-inside text-gray-700 px-9">
                            <li className="before:content-['•'] before:mr-2 before:text-slate-400">html5, css3, javascript를 사용한 웹 사이트 리뉴얼</li>
                            <li className="before:content-['•'] before:mr-2 before:text-slate-400">사용자 접근성을 고려한 웹 사이트 리뉴얼</li>
                        </ul>
                    </div>

                    {/* 개발 환경 */}
                    <div>
                    <h2 className="font-semibold text-lg mb-2">⚙️ 개발 환경</h2>
                        <ul className="flex flex-wrap gap-3 text-base">
                            {['HTML5', 'CSS3', 'JAVASCRIPT',  'JQUERY', 'FIGMA', 'ILLUSTRATION'].map((item) => (
                            <li
                                key={item}
                                className="px-4 py-1 bg-[#506898] text-white  rounded-full"
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
                            <li className="before:content-['•'] before:mr-2 before:text-slate-400">기존의 매일 유업 사이트를 사용자가 필요한 정보를 쉽게 찾을 수 있도록 전달력을 강화함</li>
                            <li className="before:content-['•'] before:mr-2 before:text-slate-400">매일유업이 상징하는 기업의 이미지(사회 공헌, 청렴함, 다양한 유형의 소비자 고려 등)를 담아냄</li>
                            <li className="before:content-['•'] before:mr-2 before:text-slate-400">사이트의 불편한 부분들을 개선하고 메인 페이지의 내용을 정비하여 사용자의 편의성을 높임</li>
                        </ul>
                    </div>

                    {/* 배포 주소 */}
                    <div>
                    <h2 className="font-semibold text-lg mb-2">🌐 배포 주소</h2>
                        <a
                            href="https://sohyun32253.github.io/maeil_project/"
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

                {/* 트러블 슈팅 */}
                <h1 className="mb-3 text-xl font-semibold">✔️ 트러블 슈팅</h1>
                <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff] px-6 py-8 space-y-6">

                    {/* 문제 */}
                    <section>
                        <h2 className="mb-2 font-semibold text-xl"> <span className="text-rose-600">💥</span> 문제</h2>
                        <p className="text-base">
                        개발 첫 프로젝트로, 기획부터 마크업 그리고 기능 구현까지 모든 과정이 처음이라 전체적으로 익숙하지 않았습니다.
                        </p>
                    </section>

                    {/* 원인 및 고민 */}
                    <section>
                        <h2 className="mb-2 font-semibold text-xl">🤔 원인 및 고민</h2>
                        <ul className="list-disc list-inside text-gray-800 text-base space-y-1 px-8 leading-loose">
                        <li>✔️ 브랜드 컨셉을 살린 디자인 설계의 어려움</li>
                        <li>✔️ 간단한 인터랙션 구현조차 로직 설계가 미숙</li>
                        <li>✔️ 디자인 리뉴얼 작업과 기능 구현을 병행해야 하는 부담</li>
                        </ul>
                    </section>

                    {/* 해결 방법 */}
                    <section>
                    <h2 className="mb-2 font-semibold text-xl">💡 해결 방법</h2>
                        <ul className="list-disc list-inside text-base text-gray-800 space-y-1 px-9 leading-loose">
                            <li className="before:content-['•'] before:mr-2 before:text-slate-400"><span className="font-semibold"></span> 팀원들과의 브랜드 조사 및 벤치마킹, 톤앤매너 등 컨셉 고찰과 의사소통을 통한 레이아웃 설계</li>
                            <li className="before:content-['•'] before:mr-2 before:text-slate-400"><span className="font-semibold"></span> 기본 문법과 구현 패턴을 학습하며, 작은 단위부터 순차적으로 기능 완성</li>
                            <li className="before:content-['•'] before:mr-2 before:text-slate-400"><span className="font-semibold"></span> 디자인 요소는 우선 마크업으로 구현 후, 점진적으로 스타일·효과 적용</li>
                        </ul>
                    </section>

                    <div className="rounded-xl border-l-4 border-sky-400 bg-sky-50 px-5 py-4">
                    <h3 className="mb-2 text-sky-700 font-semibold text-lg">🎨 디자인 주도 및 협업</h3>
                        <p className="text-base leading-loose">
                            팀원들이 Figma와 Illustrator 등 디자인 도구 사용에 미숙해, 메인 디자인 작업을 대부분 맡아 진행했습니다. <br />
                            브랜드 컨셉과 톤앤매너를 정의하고, 이를 바탕으로 레이아웃·컬러·인터랙션 방향성을 설계했습니다. <br />
                            또한 디자인 기본 가이드를 만들고, 팀원들에게 도구 사용법과 작업 방법을 설명하며 
                            협업 효율을 높이고  결과물의 시각적 완성도를 향상시켰습니다.
                        </p>
                    </div>

                    <section>
                        <h2 className="mb-2 font-semibold text-base">📜 기타 문서</h2>
                        <a
                        href="https://github.com/sohyun32253/maeil_project"
                        className="inline-block px-5 py-2 rounded-full bg-pink-300 text-white hover:bg-[#825ff7] transition text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        💻 다사다난 첫 프로젝트 보러가기 →
                        </a>
                    </section>
                </div>
        </section>
    );
}

export default MaeilDetail;
