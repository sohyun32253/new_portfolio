import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import circle from '../images/circle.png';
import gongcha from '../images/gongcha.png';

function Project({ onSelectProject }) {
  const navigate = useNavigate();

  useEffect(() => {
    const scrollY = sessionStorage.getItem('scrollY');
    if (scrollY !== null) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollY));
      }, 100);
    }
  }, []);

  const projects = [
    {
      id: 'gongcha',
      name: 'Gong cha',
      intro: 'React 기반의 웹사이트 리뉴얼',
      route: '/ProjectDetail',
      src: gongcha,
    },
    {
      id: 'circle',
      name: 'Circle',
      intro: '백엔드 서버와 Axios 통신을 사용한 협업 프로젝트',
      route: '/ProjectDetail',
      src: circle,
    },
  ];

  return (
    <section id='project' className='content w-full md:pt-[96px] md:mb-[192px]'>
      <div className='md:flex md:justify-between max-w-[1280px] mx-auto px-10 flex-wrap gap-10'>
        {projects.map((project, index) => (
          <div key={index} className='mb-20 relative bg-primary text-white md:mb-0 md:w-[500px] transition-all duration-300 shadow-lg hover:bg-cardUiHover hover:text-primary hover:scale-[1.02]'>
            <img
              src={project.src}
              alt={project.name}
              className='h-[250px] w-full object-cover cursor-pointer'
              onClick={() => {
                sessionStorage.setItem('scrollY', window.scrollY);
                navigate(`/projectDetail/${project.id}`);
              }}
            />
            <dl className='px-5 pt-5 pb-20'>
              <dt className='text-xl font-bold mb-2'>{project.name}</dt>
              <dd className='text-lg'>{project.intro}</dd>
            </dl>
            <button
              className='absolute left-5 bottom-5 px-3 py-1 rounded-xl border border-primary text-primary bg-buttonBg hover:bg-orange-500 hover:text-white hover:border-none text-lg'
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
