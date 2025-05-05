import React, { useState } from 'react';
import clsx from 'clsx';
import gongchaMain from '../images/gongcha.png'
import gongchaGnb from '../images/gongcha_gnb.png'


function GongchaDetail() {
     const buttonClass = clsx(
            'px-4 py-2 rounded-full border border-primary transition-all text-[18px]',
            'text-primary bg-white',
            'hover:bg-primary hover:text-white'
          );

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
            <div className='mb-10'>
                <img src={gongchaMain} alt='공차 메인 이미지' />
            </div>

            <h1 className='mb-3'>✔️ 주요 정보 및 기간</h1>
            <div className='bg-detailSection mb-10'>
                <div className='px-6 py-8'>
                    <p className='mb-5 text-[22px]'>📆 <strong>프로젝트 기간</strong> : 2024.09 ~ 2024.12</p>
                    <div className='mb-5'>
                        <h2>🎯 개발 목표</h2>
                        <ul className='text-[18px]'>
                            <li>1. 브랜드 컨셉 보완과 사용자 UI를 개선한 웹 사이트 리뉴얼</li>
                            <li>2. react.js를 활용한 웹 사이트 개발</li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <h2 className='mb-2'>⚙️ 개발 환경</h2>
                        <ul className='flex text-lg gap-3'>
                            <li className='px-4 py-1 border bg-slate-400 text-white rounded-full'>HTML5</li>
                            <li className='px-4 py-1 border bg-slate-400 text-white rounded-full'>CSS3</li>
                            <li className='px-4 py-1 border bg-slate-400 text-white rounded-full'>JAVASCRIPT</li>
                            <li className='px-4 py-1 border bg-slate-400 text-white rounded-full'>REACT</li>
                            <li className='px-4 py-1 border bg-slate-400 text-white rounded-full'>FIREBASE</li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <h2>⭐ 프로젝트 소개</h2>
                        <ul className='text-[18px]'>
                            <li>- 브랜드가 인상에 잘 남도록 디자인 컨셉 보완</li>
                            <li>- 메인 페이지 구조 및 컨텐츠 요소 추가를 통한 레이아웃 강화</li>
                            <li>- 메뉴 영양성분표 단순화를 통한 가독성 강화</li>
                        </ul>
                    </div>
                    <div className='mb-3'>
                        <h2 className='mb-5'>배포 주소</h2>
                        <a href="https://sohyun32253.github.io/Gongcha/" className={buttonClass}>웹사이트 방문하기 →</a>
                    </div>
                </div>
            </div>

            <h1 className='mb-3'>✔️ 주요 기능 소개</h1>
            <div className='bg-detailSection mb-10'>
                <ul className='px-6 py-8 space-y-2'>
                    {features.map((feature, index) => (
                        <li key={index} className='border rounded-xl p-4 shadow-sm transition-all duration-300'>
                            <button
                                className='w-full text-left font-semibold flex justify-between items-center'
                                onClick={() => toggle(index)}
                            >
                                <span>{feature.title}</span>
                                <span className='text-sm'>{openIndex === index ? '▲' : '▼'}</span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-[200px] mt-2 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className='text-[18px] text-gray-700'>{feature.detail}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <h1 className='mb-3'>✔️ 리뉴얼 전 vs 리뉴얼 후</h1>
            <div className='bg-detailSection mb-10 px-6 py-8'>
               
            </div>

            <h1 className='mb-3'>✔️ 트러블 슈팅</h1>
            <div className='bg-detailSection px-6 py-8'>
                <div className='mb-5'>
                    <h2 className='mb-2'>💥 문제</h2>
                    <p>하나의 컴포넌트(MenuDrink.jsx)에 사이트 내 전체 메뉴를 구현하여 2,000줄이 넘는 코드가 만들어지면서,<br/>
                    가독성 저하와 유지보수 어려움과 같은 문제가 발생했습니다.</p>
                </div>
                <div className='mb-5'>
                    <h2 className='mb-2'>🤔 원인 및 고민</h2>
                    <p>메뉴 종류가 계속 추가되면서 하나의 파일로 관리하기에는 규모가 너무 커지고,<br/>
                    컴포넌트 분리 기준도 명확하지 않아 효과적인 리팩토링 방향을 정하는 데 어려움을 겪었습니다.</p>
                </div>
                <div className='mb-5'>
                    <h2 className='mb-2'>💡 해결 방법</h2>
                    <p className='mb-5'>GNB(Global Navigation Bar)의 메뉴 구조에 맞춰 다음과 같이 총 8가지 카테고리로 나누어 컴포넌트를 분리했습니다:</p>
                    <img src={gongchaGnb} alt="공차 gnb 메뉴" className='mb-5' />
                    <ul className='text-[18px]'>
                        <li className='mb-2'>- 신메뉴 (NewMenu)</li>
                        <li className='mb-2'>- 베스트셀러 (BestSellerMenu)</li>
                        <li className='mb-2'>- 밀크티 (MilkTeaMenu)</li>
                        <li className='mb-2'>- 스무디 (SmoothieMenu)</li>
                        <li className='mb-2'>- 오리지널티 (OriginalTeaMenu)</li>
                        <li className='mb-2'>- 푸룻티&모어 (FruitTeaMenu)</li>
                        <li className='mb-2'>- RTD (RTDMenu)</li>
                        <li className='mb-2'>- 커피 (CoffeeMenu)</li>
                    </ul>
                    <p>또한, 각 메뉴별 데이터를 별도 .js 파일로 분리해 menuData 디렉토리에서 관리하도록 했습니다.</p>
                </div>

                <div className='mb-5'>
                    <h2>파일 구조</h2>
                    <ul className='italic text-[18px]'>
                        <li>src</li>
                        <ul className='px-3'>
                            <li className='text-green-700 font-bold'>├── components</li>
                                <ul className='px-10 mb-2'>
                                    <li>── MenuDrink.jsx</li>
                                </ul>
                            <li className='text-green-700 font-bold'>└── catergory</li>
                            <ul className='px-10 mb-2'>
                                <li>── BestSellerMenu.jsx</li>
                                <li>── NewMenu.jsx</li>
                                <li>── MillkTeaMenu.jsx</li>
                                <li>── SmoothieMenu.jsx</li>
                                <li>── OriginalTeaMenu.jsx</li>
                                <li>── FruitTeaMenu.jsx</li>
                                <li>── RtdMenu.jsx</li>
                                <li>── CoffeeMenu.jsx</li>
                            </ul>
                            <li className='text-green-700 font-bold'>└── menuData</li>
                            <ul className='px-10 mb-2'>
                                <li>── bestSellerData.js</li>
                                <li>── newMenuData.js</li>
                                <li>└──  ...</li>
                            </ul>
                        </ul>
                    </ul>
                </div>
                <div className='mb-10'>
                    <h2 className='mb-2'>✅ 개선 효과</h2>
                    <ul className='text-[18px]'>
                        <li>1. 메뉴 카테고리 기준으로 명확하게 나뉘어 코드 구조와 UI 일치</li>
                        <li>2.  가독성, 유지보수성 대폭 향상</li>
                        <li>3.  신규 메뉴 추가 및 수정 시 해당 컴포넌트와 데이터만 다루면 되어 확장성 확보</li>
                    </ul>
                </div>
                <div className='mb-5'>
                    <h2 className='mb-5'>📜 기타 문서</h2>
                    <a href='https://github.com/sohyun32253/Gongcha' className={buttonClass}>git hub 바로가기 →</a>
                </div>
                
            </div>
        </section>
    );
}

export default GongchaDetail;
