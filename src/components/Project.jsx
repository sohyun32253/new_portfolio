import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import zipgoai from '../images/zipgoai.png';
import circle from '../images/circle.png';
import gongcha from '../images/gongcha.png';
import saltrain from '../images/saltrain_preview.png';
import maeil from '../images/maeil_preview.png';
import codingTest from '../images/coding_test.png';
import community from '../images/community.png'
import brunchPay from '../images/brunchpay.png';
import arrowOurward from '../images/arrow_outward_icon.svg'

function Project() {
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
      id: 'gongcha',
      name: '공차 (Gong cha)',
      category: 'Personal',
      intro: 'React로 브랜드 웹사이트를 리뉴얼한 개인 프로젝트',
      route: '/ProjectDetail',
      src: gongcha,
    },
    {
      id: 'zipgoai',
      name: '땅집고 옥션',
      category: 'Professional',
      intro: '부동산 경공매 플랫폼 기능을 개발한 실무형 프로젝트',
      route: '/ProjectDetail',
      src: zipgoai,
    },
    {
      id: 'circle',
      name: 'Circle',
      category: 'Team',
      intro: 'Axios 기반 API 연동으로 데이터 흐름을 구현한 팀 프로젝트',
      route: '/ProjectDetail',
      src: circle,
    },
    {
      id: 'brunchpay',
      name: 'BrunchPay Dashboard',
      category: 'Professional',
      intro: 'React + TS 기반 PG 관리자 대시보드 구현 프로젝트',
      route: '/BrunchPayDetail',
      src: brunchPay
    },
    {
      id: 'saltrain',
      name: '솔트레인 (SALTRAIN)',
      category: 'Team',
      intro: 'Vue 기반 브랜드 웹사이트 리뉴얼 협업 프로젝트',
      route: '/ProjectDetail',
      src: saltrain,
    },
    {
      id: 'maeil',
      name: '매일유업 (maeil)',
      category: 'Team',
      intro: 'HTML/CSS/JS로 브랜드 웹사이트를 재구성한 기본기 프로젝트',
      route: '/ProjectDetail',
      src: maeil,
    },
    {
      id: 'codingTest',
      name: 'Responsive UI Components',
      category: 'Side',
      intro: 'Next.js로 반응형 UI와 컴포넌트를 구현한 개인 프로젝트',
      route: '/ProjectDetail',
      src: codingTest,
    },
    {
      id: 'community',
      name: 'Community MVP App',
      category: 'Side',
      intro: 'React Native로 커뮤니티 MVP를 구현한 모바일 프로젝트',
      route: '/CommunityDetail',
      src: community,
    },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  return (
    <section id='project' className='content w-full md:pt-[96px] md:mb-[192px]'>
      <div>
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
            onClick={() => {
              sessionStorage.setItem('scrollY', window.scrollY);
              navigate(`/projectDetail/${project.id}`);
            }}
            className="mb-20 relative cursor-pointer
            bg-gradient-to-br from-[#5B8EFF] via-[#8A93CC] to-[#A78BFA]
            text-white md:mb-0 w-full sm:w-[40%] md:w-[45%] lg:w-[45%] xl:w-[500px] transition-all duration-300 shadow-lg
            hover:bg-cardUiHover hover:scale-[1.02] group overflow-hidden rounded-2xl bg-white/70 hover:shadow-xl
            focus:outline-none focus:ring-2 focus:ring-[#806fff]" 
            role="button"
            tabIndex={0}
          >
            <img
              src={project.src}
              alt={project.name}
              className="w-full object-cover aspect-[16/9] md:aspect-[16/10]"
            />
            <div className='relative'>
              <img src={arrowOurward} alt="자세히보기" className='absolute top-5 right-5'/>
              <dl className='px-5 pt-5 pb-10 leading-relaxed text-sm'>
                <dt className='text-xl font-semibold mb-2'>{project.name}</dt>
                <dd className='text-[16px]'>{project.intro}</dd>
              </dl>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
