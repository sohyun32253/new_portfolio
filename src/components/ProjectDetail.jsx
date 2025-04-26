import React from 'react';
import backIcon from '../images/back_icon.png'
import { useParams } from 'react-router-dom';
import Contact from './Contact';
import { useNavigate } from 'react-router';
function Project01() {
    const { id } = useParams();
    const Navigate = useNavigate();
    const goBackBtn = () => {
        Navigate('/Project')
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
        <section className='content w-full text-center md:text-left'>
            <div className='p-10 md:w-[1280px] mx-auto pt-5 pb-24 relative'>
                <button className='mb-5 absolute top-5 left-8 md:static' onClick={goBackBtn}><img src={backIcon} alt="뒤로가기" /></button>
                <h1 className='text-3xl font-bold mb-8'>{data.title}</h1>
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