import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Contact from './Contact';
import GongchaDetail from './GongchaDetail';
import CircleDetail from './CircleDetail';
import ZipgoaiDetail from './ZipgoaiDetail';

function ProjectDetail() {
    const { id } = useParams();
    const Navigate = useNavigate();
    const goBackBtn = () => {
        Navigate('/#project');
    }

    let title = '';
    if (id === 'gongcha') title = 'Gong cha';
    else if (id === 'circle') title = 'Circle';
    else if (id === 'zipgoai') title = '땅집고 옥션';

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

                {id === 'gongcha' && <GongchaDetail />}
                {id === 'circle' && <CircleDetail />}
                {id === 'zipgoai' && <ZipgoaiDetail />}
            </div>
            <Contact />
        </section>
    );
}

export default ProjectDetail;
