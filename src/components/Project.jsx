import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import zipgoai from '../images/zipgoai.png';
import circle from '../images/circle.png';
import gongcha from '../images/gongcha.png';
import saltrain from '../images/saltrain_preview.png';
import maeil from '../images/maeil_preview.png';
import codingTest from '../images/coding_test.png';
import community from '../images/community.png'
import gongchaPreview01 from '../images/gongcha_preview.png';
import gongchaPreview02 from '../images/gongcha_preview01.png';
import gongchaPreview03 from '../images/gongcha_preview02.png';
import gongchaPreview04 from '../images/gongcha_preview03.png';
import gongchaPreview05 from '../images/gongcha_preview04.png';
import circlePreview01 from '../images/circle_preview.png';
import circlePreview02 from '../images/circle_preview01.png';
import circlePreview03 from '../images/circle_preview02.png';
import circlePreview04 from '../images/circle_preview03.png';
import circlePreview05 from '../images/circle_preview04.png';
import zipgoPreview01 from '../images/zipgoai.png';
import zipgoPreview02 from '../images/inquiry_01.png';
import zipgoPreview04 from '../images/login_ui.png';
import zipgoPreview03 from '../images/history_04.png';
import zipgoPreview05 from '../images/coupon_box05.png';
import saltrainPreview01 from '../images/saltrain_preview.png';
import saltrainPreview02 from '../images/saltrain_preview_01.png';
import saltrainPreview03 from '../images/saltrain_preview_02.png';
import saltrainPreview04 from '../images/saltrain_preview_03.png';
import saltrainPreview05 from '../images/saltrain_preview_04.png';
import maeilPreview01 from '../images/maeil_preview.png';
import maeilPreview02 from '../images/maeil_preview_01.png';
import maeilPreview03 from '../images/maeil_preview_02.png';
import maeilPreview04 from '../images/maeil_preview_03.png';
import maeilPreview05 from '../images/maeil_preview_04.png';
import codingTestPreview01 from '../images/coding_test01.png';
import codingTestPreview02 from '../images/coding_test02.png';
import codingTestPreview03 from '../images/coding_test.png';
import codingTestPreview04 from '../images/coding_test03.png';
import communityPreview02 from '../images/community_preview02.png';
import communityPreview03 from '../images/community_preview03.png';
import communityPreview04 from '../images/community_preview04.png';
import communityPreview05 from '../images/community_preview05.png';
import brunchPay from '../images/brunchpay.png';
import brunchPayPreview from '../images/brunchpay_preview.png';
import brunchPayPreview01 from '../images/brunchpay_preview_0.png';
import brunchPayPreview02 from '../images/brunchpay_preview_01.png';
import brunchPayPreview03 from '../images/brunchpay_preview_02.png';
import brunchPayPreview04 from '../images/brunchpay_preview_03.png';

function Project({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    const scrollY = sessionStorage.getItem('scrollY');
    if (scrollY !== null) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollY));
      }, 100);
    }
  }, []);

  const tabs = ['All', 'Professional', 'Personal', 'Team', 'Side'];

  const projects = [
    {
      id: 'brunchpay',
      name: 'BrunchPay Dashboard',
      category: 'Professional',
      intro: 'React + TS 기반 PG 관리자 대시보드 구현 프로젝트',
      route: '/BrunchPayDetail',
      src: brunchPay,
      img01: brunchPayPreview,
      img02: brunchPayPreview01,
      img03: brunchPayPreview02,
      img04: brunchPayPreview03,
      img05: brunchPayPreview04
    },
    {
      id: 'zipgoai',
      name: '땅집고 옥션',
      category: 'Professional',
      intro: '부동산 경공매 플랫폼 기능을 개발한 실무형 프로젝트',
      route: '/ProjectDetail',
      src: zipgoai,
      img01: zipgoPreview01,
      img02: zipgoPreview02,
      img03: zipgoPreview03,
      img04: zipgoPreview04,
      img05: zipgoPreview05,
    },
    {
      id: 'circle',
      name: 'Circle',
      category: 'Team',
      intro: 'Axios 기반 API 연동으로 데이터 흐름을 구현한 팀 프로젝트',
      route: '/ProjectDetail',
      src: circle,
      img01: circlePreview01,
      img02: circlePreview02,
      img03: circlePreview03,
      img04: circlePreview04,
      img05: circlePreview05
    },
    {
      id: 'gongcha',
      name: '공차 (Gong cha)',
      category: 'Personal',
      intro: 'React로 브랜드 웹사이트를 리뉴얼한 개인 프로젝트',
      route: '/ProjectDetail',
      src: gongcha,
      img01: gongchaPreview01,
      img02: gongchaPreview02,
      img03: gongchaPreview03,
      img04: gongchaPreview04,
      img05: gongchaPreview05,
    },
    {
      id: 'saltrain',
      name: '솔트레인 (SALTRAIN)',
      category: 'Team',
      intro: 'Vue 기반 브랜드 웹사이트 리뉴얼 협업 프로젝트',
      route: '/ProjectDetail',
      src: saltrain,
      img01: saltrainPreview01,
      img02: saltrainPreview02,
      img03: saltrainPreview03,
      img04: saltrainPreview04,
      img05: saltrainPreview05,
    },
    {
      id: 'maeil',
      name: '매일유업 (maeil)',
      category: 'Team',
      intro: 'HTML/CSS/JS로 브랜드 웹사이트를 재구성한 기본기 프로젝트',
      route: '/ProjectDetail',
      src: maeil,
      img01: maeilPreview01,
      img02: maeilPreview02,
      img03: maeilPreview03,
      img04: maeilPreview04,
      img05: maeilPreview05
    },
    {
      id: 'codingTest',
      name: 'Responsive UI Components (Next.js)',
      category: 'Side',
      intro: 'Next.js로 반응형 UI와 컴포넌트를 구현한 개인 프로젝트',
      route: '/ProjectDetail',
      src: codingTest,
      img01: codingTestPreview01,
      img02: codingTestPreview02,
      img03: codingTestPreview03,
      img04: codingTestPreview04,
    },
    {
      id: 'community',
      name: 'Community MVP App (React Native)',
      category: 'Side',
      intro: 'React Native로 커뮤니티 MVP를 구현한 모바일 프로젝트',
      route: '/CommunityDetail',
      src: community,
      img01: community,
      img02: communityPreview02,
      img03: communityPreview03,
      img04: communityPreview04,
      img05: communityPreview05,
    },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  return (
    <section id='project' className='content w-full md:pt-[96px] md:mb-[192px]'>
         <ul className='tapbar_wrapper flex mb-10 gap-10 max-w-[1280px] mx-auto px-10 text-[#b6aee4] text-xl '>
      {tabs.map((tab) => (
        <li
          key={tab}
          id={tab}
          onClick={() => setActiveTab(tab)}
          className={`cursor-pointer  nav-link ${
            activeTab === tab
              ? 'font-bold text-[#806fff] border-pointColor'
              : ''
          }`}
        >
          {tab}
        </li>
      ))}
    </ul>

        <div className="sm:flex sm:justify-between max-w-[1280px] mx-auto px-10 flex-wrap gap-10 items-stretch">
          {filteredProjects.map((project, index) => (
          <div
          key={index}
          className="mb-20 relative
          bg-gradient-to-br from-[#5B8EFF] via-[#8A93CC] to-[#A78BFA]
          text-white md:mb-0 w-full sm:w-[40%] md:w-[45%] lg:w-[45%] xl:w-[500px] transition-all duration-300 shadow-lg
          hover:bg-cardUiHover hover:scale-[1.02] group overflow-hidden rounded-2xl bg-white/70 hover:shadow-xl"
          >
            <img
              src={project.src}
              alt={project.name}
              className="w-full object-cover aspect-[16/9] md:aspect-[16/10] cursor-pointer"
              onClick={() => {
                sessionStorage.setItem('scrollY', window.scrollY);
                navigate(`/projectDetail/${project.id}`);
              }}
            />
            <dl className='px-5 pt-5 pb-20 leading-relaxed text-sm'>
              <dt className='text-xl font-semibold mb-2'>{project.name}</dt>
              <dd className='text-[16px]'>{project.intro}</dd>
            </dl>
          {project.id !== "codingTest" && (
            <button
              className="absolute left-5 bottom-5 px-3 py-1 rounded-xl border
                text-[#ffffff] bg-gradient-to-br from-[#5B8EFF] to-[#A78BFA] text-lg font-semibold
                hover:bg-[#654dff] hover:bg-none hover:border-none"
              onClick={() => {
                sessionStorage.setItem("scrollY", window.scrollY);
                onSelectProject(project);
              }}
            >
              Preview
            </button>
          )}
          </div>
        ))}
        </div>
       
    </section>
  );
}

export default Project;
