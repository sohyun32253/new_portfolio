import React, { useState } from 'react';
import clsx from 'clsx';
import circleMain from '../images/circle.png'
import gongchaGnb from '../images/gongcha_gnb.png'

function CircleDetail() {
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
            title: 'REST API 기반 로그인 / 회원가입 기능',
            detail: '사용자 인증을 위한 로그인 및 회원가입 기능을 구현했으며, 백엔드와의 통신은 axios를 통해 RESTful 방식으로 처리했습니다.'
        },
        {
            title: '실시간 유효성 검사 (React Hook Form)',
            detail: 'react-hook-form을을 활용하여 입력값에 대한 실시간 유효성 검사 기능을 구현했습니다. 사용자 경험을 고려해 필드별 오류 메시지를 직관적으로 표시하고 있습니다.'
        },
        {
            title: 'FullCalendar 기반 스케줄 기능 (UI 구현 완료)',
            detail: '모임 일정 관리를 위한 캘린더 기능을 FullCalendar 라이브러리로 구현 중이며, 현재 UI는 완성된 상태이며 세부 기능을 개발 중입니다.'
        },
        {
            title: '사이드바 토글 기능 (react-pro-sidebar)',
            detail: 'react-pro-sidebar를 활용해 반응형 사이드바를 구현했으며, 사용자 편의를 위한 토글 기능 및 메뉴 간 네비게이션 기능을 적용했습니다.'
        }
    ];

    return (
        <section className='text-[20px]'>
            <div className='mb-10'>
                <img src={circleMain} alt='써클 메인 이미지' />
            </div>

            <h1 className='mb-3'>✔️ 주요 정보 및 기간</h1>
            <div className='bg-detailSection mb-10'>
                <div className='px-6 py-8'>
                    <div className='mb-5'>
                        <h2 className='mb-2'>✏️ 기획 의도</h2>
                        <p>대부분의 대학 커뮤니티 앱은 한국어 기반이며, 한국인 중심의 문화와 정서가 짙게 반영되어 있어<br/>
                        외국인 유학생들이 소외감을 느끼거나 소통에 어려움을 겪는 경우가 많습니다. </p>
                        <p>실제로 외국어대학교에 재학 중인 친구의 이야기를 통해, <br/>
                        외국인 학생들이 기존 커뮤니티에서 편하게 어울리기 어렵다는 현실을 접하게 되었습니다.</p>
                        <p>이러한 문제를 해결하고자, 외국인 유학생들이 국적과 언어에 상관없이 자유롭게 소통하고 <br/> 친목을 도모할 수 있는 커뮤니티 플랫폼 'Circle'을 기획·개발하게 되었습니다.</p>
                        <p> 사용자는 관심사에 따라 모임(서클)을 생성하고, 가입 및 참여할 수 있으며, 커뮤니티 내에서 다양한 의견을 나눌 수 있습니다.</p>
                    </div>

                    <p className='mb-5 text-[22px]'>📆 <strong>프로젝트 기간</strong> : 2024.11 ~ 현재(ing)</p>
                    <div className='mb-5'>
                        <h2 className='mb-2'>🎯 개발 목표</h2>
                        <ul className='text-[18px]'>
                            <li>1. 외국인 친화적인 커뮤니티 웹/앱 개발</li>
                            <li>2. 프론트엔드 / 백엔드 업무 분담 협업 개발</li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <h2 className='mb-2'>⚙️ 개발 환경</h2>
                        <ul className='flex text-lg gap-3'>
                            <li className='px-4 py-1 border bg-slate-400 text-white rounded-full'>HTML5</li>
                            <li className='px-4 py-1 border bg-slate-400 text-white rounded-full'>CSS3</li>
                            <li className='px-4 py-1 border bg-slate-400 text-white rounded-full'>JAVASCRIPT</li>
                            <li className='px-4 py-1 border bg-slate-400 text-white rounded-full'>REACT</li>
                            <li className='px-4 py-1 border bg-slate-400 text-white rounded-full'>TYPESCRIPT</li>
                            <li className='px-4 py-1 border bg-slate-400 text-white rounded-full'>REST API</li>
                            <li className='px-4 py-1 border bg-slate-400 text-white rounded-full'>AXIOS</li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <h2 className='mb-2'>⭐ 프로젝트 소개</h2>
                        <ul className='text-[18px]'>
                            <li>1. 외국인 친화적인 커뮤니티 웹/앱 개발</li>
                            <li>2. 프론트엔드 / 백엔드 업무 분담 협업 개발</li>
                        </ul>
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

            <h1 className='mb-3'>✔️ 협업 도구 및 방식</h1>
            <div className='bg-detailSection mb-10'>
                <div className='px-6 py-8'>
                    사용 도구 : github, notion
                </div>
            </div>

            <h1 className='mb-3'>✔️ 리뉴얼 전 vs 리뉴얼 후</h1>
            <div className='bg-detailSection mb-10 px-6 py-8'>
                {/* 여기에 비교 스크린샷 또는 설명 추가 */}
            </div>

            <h1 className='mb-3'>✔️ 트러블 슈팅</h1>
            <div className='bg-detailSection px-6 py-8'>
                <div className='mb-5'>
                    <h2 className='mb-2'>💥 문제</h2>
                    <p>로그인 / 회원가입 페이지를 만들고 백엔드 데이터를 요청하는 과정을 어떤 방법으로 구현해야할지에 대한 문제가 발생했습니다.</p>
                </div>
                <div className='mb-5'>
                    <h2 className='mb-2'>🤔 원인 및 고민</h2>
                    <p>백엔드에게 데이터를 요청하는 방식이 여러 가지가 있는데 어떤 방식을 선택해야 가독성과 유지보수 측면에서 좋고 <br/>
                        초보자인 제가 이해하기 쉬운 구조가 뭐일지 고심하였습니다.
                    </p>
                </div>
                <div className='mb-5'>
                    <h2 className='mb-2'>💡 해결 방법</h2>
                    <p className='mb-5'>Axios 방식을 선택하여 백엔드 서버에 데이터를 요청하는 코드를 만들었습니다.</p>
                </div>

                <div className='mb-10'>
                    <h2 className='mb-2'>✅ 선택한 방식의 이점</h2>
                    <ul className='text-[18px]'>
                        <li>1. 프론트엔드 입장에서 이해하기 쉬운 코드 구조로 가독성 및 유지보수성 향상</li>
                        <li>2. 에러 처리와 같은 코드를 작성하여 여러 가지 상황 대응 가능</li>
                    </ul>
                </div>
                <div className='mb-5'>
                    <h2 className='mb-5'>📜 기타 문서</h2>
                    <a href='https://github.com/circle-kr/circle_front' className={buttonClass}>git hub 바로가기 →</a>
                </div>
                
            </div>
        </section>
    );
}

export default CircleDetail;
