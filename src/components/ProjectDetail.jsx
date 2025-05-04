import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Contact from './Contact';
import GongchaDetail from './GongchaDetail';
import CircleDetail from './CircleDetail';

function ProjectDetail() {
    const { id } = useParams();
    const Navigate = useNavigate();
    const goBackBtn = () => {
        Navigate('/#project');
    }

    // 프로젝트 제목 조건부 처리
    let title = '';
    if (id === 'gongcha') title = 'Gong cha';
    else if (id === 'circle') title = 'Circle';

    return (
        <section className='content w-full relative z-[101] bg-background text-center md:text-left pt-20 md:p-0'>
            <div className='px-10 pt-[50px] md:w-[1280px] mx-auto md:pt-[96px] pb-24'>
                <div className='flex items-center mb-8 gap-5'>
                    <button
                        className='border px-3 py-2 text-3xl font-bold transition-all border-primary hover:bg-primary hover:text-white'
                        onClick={goBackBtn}
                    >
                        ←
                    </button>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                </div>

                {/* 프로젝트 상세 내용 조건부 렌더링 */}
                {id === 'gongcha' && <GongchaDetail />}
                {id === 'circle' && <CircleDetail />}
            </div>
            <Contact />
        </section>
    );
}

export default ProjectDetail;
