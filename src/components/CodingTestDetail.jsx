function CodingTestDetail() {
    return (
        <section className='text-[20px]'>
            <h1 className="mb-3 text-xl font-semibold">✔️ 주요 정보 및 기간</h1>
            <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff]">
                <div className="px-6 py-8 space-y-6 text-[16px] leading-relaxed text-textColor">
                    <div>
                        <h2 className="font-semibold text-lg mb-2">⭐ 프로젝트 소개</h2>
                        <ul className="list-disc list-inside text-gray-700 px-9">
                            <li className="before:content-['•'] before:mr-2 before:text-slate-400">코딩테스트 과제 기반으로 진행한 프로젝트입니다. <br/>
                            작은 규모이지만, Next.js의 기본 SSR(Server Side Rendering) 환경을 경험하고 Vercel을 통해 배포했습니다.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg mb-2">⚙️ 개발 환경</h2>
                        <ul className="flex flex-wrap gap-3 text-base">
                            {['NEXT.JS', 'REACT', 'TAILWINDCSS', 'VERCEL'].map((item) => (
                            <li
                                key={item}
                                className="px-4 py-1 bg-[#6f728b] text-white  rounded-full"
                            >
                                {item}
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg mb-2">🌐 배포 주소</h2>
                        <a
                            href="https://coding-test-rocket.vercel.app/"
                            className="inline-block px-5 py-2 rounded-full bg-pointColor text-white hover:bg-[#825ff7] transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            결과물 보러가기 →
                        </a>
                    </div>
                </div>
            </div>
            <h1 className="mb-3 text-xl font-semibold">✔️ 구현 기능</h1>
            <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff]">
                <ul className="px-6 py-8 space-y-3 text-gray-800 text-[16px]">
                    <li className="before:content-['•'] before:mr-2 before:text-slate-400">기본 페이지 라우팅</li>
                    <li className="before:content-['•'] before:mr-2 before:text-slate-400">Next.js 환경에서 SSR 기반 렌더링 경험</li>
                    <li className="before:content-['•'] before:mr-2 before:text-slate-400">데이터 기반 컴포넌트 설계 및 UI 분기 처리</li>
                    <li className="before:content-['•'] before:mr-2 before:text-slate-400">Vercel 배포</li>
                </ul>
            </div>
            <section>
                <h2 className="mb-2 font-semibold text-base">📜 기타 문서</h2>
                <a
                href="https://github.com/sohyun32253/coding-test-rocket"
                className="inline-block px-5 py-2 rounded-full bg-pink-300 text-white hover:bg-[#825ff7] transition text-base"
                target="_blank"
                rel="noopener noreferrer"
                >
                💻 더 자세한 내용이 궁금하다면 →
                </a>
            </section>
        </section>
    );
}

export default CodingTestDetail;
