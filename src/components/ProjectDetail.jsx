import React from 'react';
import { useParams } from 'react-router-dom';
import Contact from './Contact';
import { useNavigate } from 'react-router';
function Project01() {
    const { id } = useParams();
    const Navigate = useNavigate();
    const goBackBtn = () => {
        Navigate('/#project')
    }
    const projects = {
        gongcha: {
            title: 'Gong cha',
        },
        circle: {
            title: 'Circle',
        }
    }

    const data = projects[id];
    return(
        <section className='content w-full text-center md:text-left pt-20 md:p-0'>
            <div className='px-10 pt-[50px] md:w-[1280px] mx-auto md:pt-[96px] pb-24'>
            <div className='flex items-center mb-8 gap-5'>
                    <button className='border px-3 py-2 text-3xl font-bold transition-all border-primary hover:bg-primary hover:text-white' onClick={goBackBtn}>←</button>
                    <h1 className='text-3xl font-bold'>{data.title}</h1>
                    </div> 
                <img src={data.src} alt={data.title} className='bg-slate-400 w-[1280px] h-[510px] mb-8' />

                <section className='mb-8'>
                    <h2 className='text-2xl font-bold mb-8'>주요 정보 및 기간</h2>
                    <img src="" alt="" className='bg-slate-400 w-[1280px] h-[510px]' />
                </section>

                <section>
                    <h2 className='text-2xl font-bold mb-8'>트러블 슈팅</h2>
                    <img src="" alt="" className='bg-slate-400 w-[1280px] h-[510px]' />
                </section>
            </div>
            <Contact/>
        </section>
    )
}
export default Project01;