import React, { useState } from 'react';
import clsx from 'clsx';
import circleMain from '../images/circle.png'

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

 <h1 className="mb-3 text-xl font-semibold">✔️ 주요 정보 및 기간</h1>
<div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff]">
  <div className="px-6 py-8 space-y-6 text-[16px] leading-relaxed text-textColor">
    
    {/* 기획 의도 */}
    <div>
      <h2 className="text-lg font-semibold mb-2">✏️ 기획 의도</h2>
      <p className='text-base'>
        대부분의 대학 커뮤니티 앱은 한국어 기반이며, 외국인 유학생들이 소외감을 느끼거나 소통에 어려움을 겪는 경우가 많습니다. <br />
        실제 외국어대학교 재학생의 이야기를 통해 외국인 학생들이 기존 커뮤니티에 편하게 어울리기 어렵다는 현실을 접하게 되었고,  <br />
        이에 따라 국적과 언어에 관계없이 자유롭게 소통하고 친목을 도모할 수 있는 커뮤니티 플랫폼 <strong>'Circle'</strong>을 기획·개발하게 되었습니다.
      </p>
    </div>

    {/* 기간 */}
    <p className="text-lg">
      📆 <strong className="text-gray-800">프로젝트 기간</strong> : 2024.11 ~ 2025.05
    </p>

    {/* 개발 목표 */}
    <div>
      <h2 className="font-semibold text-lg mb-2">🎯 개발 목표</h2>
      <ul className="list-disc list-inside text-gray-700 px-9">
        <li className="before:content-['•'] before:mr-2 before:text-slate-400">외국인 유학생 친화적인 커뮤니티 웹·앱 개발</li>
        <li className="before:content-['•'] before:mr-2 before:text-slate-400">프론트엔드·백엔드 분업을 통한 효율적인 협업 구조 구축</li>
      </ul>
    </div>

    {/* 개발 환경 */}
    <div>
      <h2 className="font-semibold text-lg mb-2">⚙️ 개발 환경</h2>
      <ul className="flex flex-wrap gap-3 text-base">
        {['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'TYPESCRIPT', 'REST API', 'AXIOS'].map((item) => (
          <li
            key={item}
            className="px-4 py-1 bg-[#6f728b] text-white  rounded-full"
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
        <li className="before:content-['•'] before:mr-2 before:text-slate-400">외대 재학 중인 친구의 제안으로 시작한 외국인 유학생 중심 커뮤니티 플랫폼 개발 프로젝트입니다.</li>
        <li className="before:content-['•'] before:mr-2 before:text-slate-400">UI 설계부터 퍼블리싱, 로그인·회원가입 기능을 중심으로 백엔드 서버와 API 연동을 구현하여 실서비스 구조를 경험했습니다.</li>
      </ul>
    </div>

    {/* 배포 주소 */}
    <div>
      <h2 className="font-semibold text-lg mb-2">🌐 배포 주소</h2>
      <a
        href="https://circle-kr.github.io/circle_front/"
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
    🛠 사용 도구 : <span className="font-medium">GitHub, Notion</span>
  </p>
</div>

{/* 트러블 슈팅 */}
<h1 className="mb-3 text-xl font-semibold">✔️ 트러블 슈팅</h1>
<div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff] px-6 py-8 space-y-6">

  <section>
    <h2 className="mb-2 font-semibold text-lg">💥 문제</h2>
    <p className='text-base'>로그인 및 회원가입 페이지 구현 시, 백엔드 통신 구조 설계에 대한 고민이 있었습니다.</p>
  </section>

  <section>
    <h2 className="mb-2 font-semibold text-lg">🤔 원인 및 고민</h2>
    <ul className="list-disc list-inside text-gray-800 text-base px-9">
      <li className="before:content-['•'] before:mr-2 before:text-slate-400">요청 방식 선택지가 다양했음</li>
      <li className="before:content-['•'] before:mr-2 before:text-slate-400">구조가 복잡하지 않고 유지보수에 유리한 구조 필요</li>
      <li className="before:content-['•'] before:mr-2 before:text-slate-400">초보자도 쉽게 이해할 수 있는 구조 고려</li>
    </ul>
  </section>

  <section>
    <h2 className="mb-2 font-semibold text-lg">💡 해결 방법</h2>
    <p className='text-base'>Axios 라이브러리를 활용하여 백엔드와 통신하는 구조로 설계하였습니다.</p>
  </section>

  <section>
    <h2 className="mb-2 font-semibold text-base">✅ Axios 선택 이유 및 장점</h2>
    <ul className="list-decimal list-inside text-gray-800 text-base px-9">
      <li className="before:content-['•'] before:mr-2 before:text-slate-400">간결한 문법으로 직관적인 API 코드 작성 가능</li>
      <li className="before:content-['•'] before:mr-2 before:text-slate-400">유연한 요청 설정 및 에러 처리 구조</li>
      <li className="before:content-['•'] before:mr-2 before:text-slate-400">요청 코드 모듈화로 유지보수성 향상</li>
    </ul>
  </section>

  <section>
    <h2 className="mb-2 font-semibold text-base">📜 기타 문서</h2>
    <a
      href="https://github.com/circle-kr/circle_front"
      className="inline-block px-5 py-2 rounded-full bg-pink-300 text-white hover:bg-[#825ff7] transition text-base"
      target="_blank"
      rel="noopener noreferrer"
    >
      💻 개발의 흔적, 여기 있습니다 →
    </a>
  </section>
</div>

        </section>
    );
}

export default CircleDetail;
