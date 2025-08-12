import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import zipgoai from '../images/zipgoai.png';
import circle from '../images/circle.png';
import gongcha from '../images/gongcha.png';
import saltrain from '../images/saltrain_preview.png';
import maeil from '../images/maeil_preview.png';
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


function Project({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('전체 프로젝트');
  const navigate = useNavigate();

  useEffect(() => {
    const scrollY = sessionStorage.getItem('scrollY');
    if (scrollY !== null) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollY));
      }, 100);
    }
  }, []);

  const tabs = ['전체 프로젝트', '실무 프로젝트', '개인 프로젝트', '협업 프로젝트'];

  const projects = [
    {
      id: 'zipgoai',
      name: '땅집고 옥션',
      intro: '부동산 경공매 플랫폼의 인턴으로 참여해, 실제 서비스 환경에서 개발을 경험한 실무 프로젝트',
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
      intro: '백엔드 서버와의 Axios 통신을 통해 데이터 흐름과 협업의 묘미를 살린 협업 프로젝트',
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
      intro: 'React로 구현한 브랜드 웹사이트 리뉴얼, UI/UX 개선에 집중한 개인 프로젝트',
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
      intro: 'Vue 기반 웹사이트 리뉴얼로, 디자이너 팀원과 함께 작업한 협업 프로젝트',
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
      intro: '브랜드 리뉴얼과 간단한 인터랙션 구현을 함께 경험한, HTML/CSS/JS 기반의 첫 협업 프로젝트',
      route: '/ProjectDetail',
      src: maeil,
      img01: maeilPreview01,
      img02: maeilPreview02,
      img03: maeilPreview03,
      img04: maeilPreview04,
      img05: maeilPreview05
    },
  ];

  const filteredProjects = projects.filter(project => {
  if (activeTab === '전체 프로젝트') return true;
  return project.intro.includes(activeTab); // 예: intro에 '협업' 포함되어 있으면 보여짐
});

  return (
    <section id='project' className='content w-full md:pt-[96px] md:mb-[192px]'>
         <ul className='tapbar_wrapper flex mb-10 gap-10 max-w-[1280px] mx-auto px-10 text-projectTab font-medium'>
      {tabs.map((tab) => (
        <li
          key={tab}
          id={tab}
          onClick={() => setActiveTab(tab)}
          className={`cursor-pointer transition-all ${
            activeTab === tab
              ? 'font-bold text-pointColor border-b-2 border-pointColor'
              : ''
          }`}
        >
          {tab}
        </li>
      ))}
    </ul>

        <div className='md:flex md:justify-between max-w-[1280px] mx-auto px-10 flex-wrap gap-10'>
        {filteredProjects.map((project, index) => (
          <div key={index} className='mb-20 relative bg-[#9e9cc1] text-white md:mb-0 md:w-[500px] transition-all duration-300 shadow-lg hover:bg-cardUiHover hover:text-[#735b94] hover:scale-[1.02]'>
            <img
              src={project.src}
              alt={project.name}
              className='h-[250px] w-full object-cover cursor-pointer inline-block'
              onClick={() => {
                sessionStorage.setItem('scrollY', window.scrollY);
                navigate(`/projectDetail/${project.id}`);
              }}
            />
            <dl className='px-5 pt-5 pb-20 leading-loose'>
              <dt className='text-xl font-bold mb-2'>{project.name}</dt>
              <dd className='text-lg'>{project.intro}</dd>
            </dl>
            <button
              className='absolute left-5 bottom-5 px-3 py-1 rounded-xl border  text-[#735b94] bg-buttonBg hover:bg-pointColor hover:text-white hover:border-none text-lg font-semibold'
              onClick={() => {
                sessionStorage.setItem('scrollY', window.scrollY);
                onSelectProject(project);
              }}
            >
              Preview
            </button>
          </div>
        ))}
        </div>
       
    </section>
  );
}

export default Project;
