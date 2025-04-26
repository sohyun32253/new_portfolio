import React from 'react';
import clsx from 'clsx';
import Contact from './Contact';
import { useNavigate } from 'react-router';
import circle from '../images/circle.png';
import gongcha from '../images/gongcha.png';

function Project() {
    const projects = [
        {  id: 'gongcha', name : 'Gong cha', intro : 'React 기반의 웹사이트 리뉴얼', route: '/ProjectDetail', src: gongcha },
        {  id: 'circle', name : 'Circle', intro : '백엔드 서버와 Axios 통신을 사용한 협업 프로젝트', route: '/ProjectDetail', src:circle }
    ]

    const navigate = useNavigate();

    const buttonClass = clsx(
           'px-3 py-1 rounded-xl border transition-all',
           'border-primary text-primary hover:bg-CardButton hover:text-white text-xl'
         );

    return(
        <section className='content w-full'>
            <div className='md:flex justify-between max-w-[1280px] mx-auto p-10'>
                {projects.map((project, index)=> (
                <div key={index} className='mb-20 relative bg-slate-400 text-white transition-colors duration-300 shadow-lg hover:scale-[1.02]'>
                    <img src={project.src} alt="" className='w-[500px] h-[250px] bg-slate-400 border-none cursor-pointer' onClick={() => navigate(`/projectDetail/${project.id}`)}/>
                    <dl className='px-5 pt-5 pb-20 border-gnb'>
                        <dt className='text-2xl font-bold mb-2'>{project.name}</dt>
                        <dd className='text-xl'>{project.intro}</dd>
                    </dl>
                    <button className={`absolute left-5 bottom-5  ${buttonClass}`} >Preview</button>
                </div>
                ))}
            </div>
            <Contact/>
        </section>
    )
}
export default Project;