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
    const projects = [
        { title : "Gongcha"  },
        { title : "Circle"  }
    ]

    const data = projects[id];
    return(
        <section className='content w-full'>
            <div className=' max-w-[1280px] mx-auto pt-5 pb-24'>
                <button className='mb-5' onClick={goBackBtn}><img src={backIcon} alt="뒤로가기" /></button>
                <h1 className='text-3xl font-bold mb-8'>{data}</h1>
                <img src="" alt="" className='bg-slate-400 w-[1280px] h-[510px] mb-8' />

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