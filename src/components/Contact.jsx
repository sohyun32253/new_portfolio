import React from 'react';

function Contact() {
    return (
        <div className='content bg-[#c6c5da] w-full p-10'>
            <div className='text-white text-center'>
                <p className='text-xl mb-5'>e-mail : sohyun32253@naver.com</p>
                <p className='text-xl mb-8'>Phone : 010-3354-6096</p>

                <a
                    href="mailto:sohyun32253@naver.com"
                    className="inline-block bg-white text-[#735b94] font-semibold px-6 py-3 rounded-full shadow-md 
                               hover:bg-slate-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
}

export default Contact;
