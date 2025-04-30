import {React,useState} from 'react';
import clsx from 'clsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router';
import ProjectPopUp from './ProjectPopUp';
import circle from '../images/circle.png';
import gongcha from '../images/gongcha.png';

function Project() {
    const projects = [
        {  id: 'gongcha', name : 'Gong cha', intro : 'React 기반의 웹사이트 리뉴얼', route: '/ProjectDetail', src: gongcha },
        {  id: 'circle', name : 'Circle', intro : '백엔드 서버와 Axios 통신을 사용한 협업 프로젝트', route: '/ProjectDetail', src:circle }
    ]

    const [selectedProject, setSelectedProject] = useState(null);

    const handlePreviewClick = (project) => {
      setSelectedProject(project);
    };
  
    const closeModal = () => {
      setSelectedProject(null);
    };

    const navigate = useNavigate();
    const buttonClass = clsx(
           'px-3 py-1 rounded-xl border transition-all',
           'border-primary text-primary bg-buttonBg hover:bg-orange-500 hover:text-white hover:border-none text-lg'
         );

         return (
            <section id='project' className='content w-full pt-20 md:pt-0'>
              <div className='md:flex md:justify-between max-w-[1280px] mx-auto p-10 flex-wrap gap-10'>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className='mb-20 relative bg-primary text-white md:w-[500px] transition-all duration-300 shadow-lg hover:bg-cardUiHover hover:text-primary hover:scale-[1.02]'
                  >
                    <img
                      src={project.src}
                      alt=""
                      className='h-[250px] w-full object-cover cursor-pointer'
                      onClick={() => navigate(`/projectDetail/${project.id}`)}
                    />
                    <dl className='px-5 pt-5 pb-20'>
                      <dt className='text-xl font-bold mb-2'>{project.name}</dt>
                      <dd className='text-lg'>{project.intro}</dd>
                    </dl>
                    <button
                      className={`absolute left-5 bottom-5 ${buttonClass}`}
                      onClick={() => handlePreviewClick(project)}
                    >
                      Preview
                    </button>
                  </div>
                ))}
              </div>
        
              {/* 모달 */}
              {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
                  <div className="relative w-[80%] max-w-[800px] bg-white p-6 rounded-lg">
                    <button
                      className="absolute top-4 right-4 text-xl font-bold"
                      onClick={closeModal}
                    >
                      ✕
                    </button>
                    <ProjectPopUp project={selectedProject} />
                  </div>
                </div>
              )}
            </section>
          );
        }
export default Project;