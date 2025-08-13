import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Lightning from '../images/about_icon.png';
import profile from '../images/profile_img.jpg';

function About() {
    const buttonClass = clsx(
        'px-4 py-2 rounded-full border border-pointColor transition-all',
        'text-pointColor',
        'hover:bg-pointColor hover:text-white'
      );
      
    return(
        <section id='about' className='content w-full mb-20 md:pt-[96px] md:mb-[96px]'>
            <div className='border-none'>
                <div className='max-w-[1280px] mx-auto px-4 p-10 mb-5
                flex flex-col justify-center items-center gap-5 text-center 
                md:flex-row  md:gap-[140px] md:text-left '>
                    <img src={profile} alt="프로필이미지" className='w-[220px] h-[auto]'/>
                    <div className='pt-4'>
                        <p className='text-xl md:text-2xl mb-2'>박소현</p>
                        <p className='text-xl md:text-2xl mb-2'>2001.03.22</p>
                        <p className='text-xl md:text-2xl mb-2'>경기도 안양시</p>
                        <p className='text-xl md:text-2xl mb-10'>계원예술대학교 화훼디자인과</p>

                        <div className='text-xl md:flex'>
                            <Link to="https://github.com/sohyun32253" className={`${buttonClass} mb-10 md:mb-0 md:mr-5 block`} target="_blank">Git hub</Link>
                            <Link to="https://velog.io/@sohyun32253/posts" className={`${buttonClass} block`} target="_blank">velog</Link>
                        </div>
                    </div>
                </div>

                <div className='intro text-center p-10 text-white bg-[#8A93CC] w-full leading-loose'>
                    <div>
                        <h2 className='mb-5 font-bold text-2xl '><span><img src={Lightning} alt=""  className='inline fade-glow'/></span> 포텐이 많은 사람</h2>
                        <p>호기심과 배움의 즐거움으로 새로운 도전에 주저하지 않았습니다.</p>
                        <p>비전공자로 시작했지만 프론트엔드 개발에 매료되어 짧은 시간 안에 빠르게 성장했고, </p>
                        <p>지금은 더 나은 코드를 탐구하는 일에 열정을 쏟고 있습니다. 앞으로 폭발할 제 ‘포텐’을 기대해 주세요.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;