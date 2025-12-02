import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Contact from './Contact';
import GongchaDetail from './GongchaDetail';
import CircleDetail from './CircleDetail';
import ZipgoaiDetail from './ZipgoaiDetail';
import SaltrainDetail from './SaltrainDetail';
import MaeilDetail from './MaeilDetail';
import CodingTestDetail from './CodingTestDetail';
import CommunityDetail from './CommunityDetail';
import BrunchPayDetail from './BrunchPayDetail';

function ProjectDetail() {
    const { id } = useParams();
    const Navigate = useNavigate();
    const goBackBtn = () => {
        Navigate('/#project');
    }

    let title = '';
    if (id === 'gongcha') title = '공차 (Gong cha)';
    else if (id === 'circle') title = 'Circle';
    else if (id === 'zipgoai') title = '땅집고 옥션';
    else if (id === 'saltrain') title = '솔트레인 (SALTRAIN)';
    else if (id === 'maeil') title = '매일유업 (Maeil)';
    else if (id === 'codingTest') title = 'Responsive UI Components (Next.js)';
    else if (id === 'community') title = 'Community MVP App (React Native)';
    else if (id === 'brunchpay') title = 'BrunchPay Dashboard';

    return (
        <section className='content w-full relative z-[101] bg-background text-center md:text-left pt-20 md:p-0'>
            <div className='px-10 pt-[50px] xl:w-[1280px] mx-auto md:pt-[96px] pb-24'>
                <div className='flex items-center mb-8 gap-5'>
                    <button
                        className='border px-3 py-2 text-3xl font-bold transition-all border-[#5a4c99] hover:bg-gradient-to-br from-[#5B8EFF] via-[#8A93CC] to-[#A78BFA] hover:text-white'
                        onClick={goBackBtn}
                    >
                        ←
                    </button>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                </div>

                {id === 'gongcha' && <GongchaDetail />}
                {id === 'circle' && <CircleDetail />}
                {id === 'zipgoai' && <ZipgoaiDetail />}
                {id === 'saltrain' && <SaltrainDetail />}
                {id === 'maeil' && <MaeilDetail />}
                {id === 'codingTest' && <CodingTestDetail />}
                {id === 'community' && <CommunityDetail />}
                {id === 'brunchpay' && <BrunchPayDetail />}
            </div>
            <Contact />
        </section>
    );
}

export default ProjectDetail;
