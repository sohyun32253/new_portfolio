import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Lightning from '../images/about_icon.png'

function About() {
    const buttonClass = clsx(
        'px-4 py-2 rounded-full border border-primary transition-all',
        'text-white bg-primary',
        'hover:bg-white hover:text-primary'
      );
      
    return(
        <section id='about' className='content w-full'>
            <div className='border-none'>
            <div className='max-w-[1280px] mx-auto px-4 p-10 
            flex flex-col justify-center items-center gap-5 text-center 
            md:flex-row md:justify-normal md:gap-28 md:text-left '>
                <img src={null} alt="프로필이미지" className='w-[260px] h-[260px] bg-gray-400 shadow'/>
                <div className='pt-4'>
                    <p className='text-xl md:text-2xl mb-2'>박소현</p>
                    <p className='text-xl md:text-2xl mb-2'>2001.03.22</p>
                    <p className='text-xl md:text-2xl mb-2'>경기도 안양시</p>
                    <p className='text-xl md:text-2xl mb-10'>계원예술대학교 화훼디자인과</p>

                    <div className='text-xl md:flex'>
                        <Link to="" className={`${buttonClass} mb-10 md:mb-0 md:mr-5 block`} target="_blank">Git hub</Link>
                        <Link to="" className={`${buttonClass} block`} target="_blank">이력서 바로가기</Link>
                    </div>
                </div>
            </div>

            <section className='intro text-center p-11 text-white bg-subBackground w-full'>
                <div>
                    <h2 className='mb-5 font-bold text-2xl'><span><img src={Lightning} alt=""  className='inline'/></span> 포텐이 많은 사람</h2>
                    <p>저는 어릴 때부터 호기심이 많아 다양한 경험을 즐겼고, 새로운 것을 배우는 것에 큰 흥미를 느껴왔습니다.</p>
                    <p> 그러던 중, 코드를 통해 화면을 구현하는 프론트엔드 개발에 매력을 느껴 본격적으로 공부를 시작했습니다.</p>
                    <p>비전공자였지만 스스로의 가능성을 믿고 도전했고, 지금은 더 나은 코드를 연구하는 일에 즐거움을 느낍니다.</p>
                    <p>짧은 시간 안에 많은 것을 흡수하고 빠르게 성장해온 만큼, 앞으로 더 크게 터질 ‘포텐’을 기대해 주세요.</p>
                </div>
            </section>
            </div>
        </section>
    )
}
export default About;