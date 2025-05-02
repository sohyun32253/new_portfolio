import React, { useState } from 'react';
import clsx from 'clsx';
import menuIcon from '../images/menu_icon.png';
import closeIcon from '../images/close_icon.png';
import useIsMd from '../hooks/useIsMd';
function Header() {
    const isMd = useIsMd();
    const gnbClass = clsx(
        'text-white text-4xl hover:text-gnbHover transition'
      );
    const [menuVisible, setMenuVisible] = useState(false);
    const menuOpenToggle = () => {
        setMenuVisible(!menuVisible);
    }
      
    return(
        <div className='header fixed bg-background w-full z-[100]'>
            <div className=' w-full bg-subText'>
                {!isMd && (
                    <div className='bg-background h-[128px] md:h-[88px]'>
                        <button onClick={menuOpenToggle} className='z-20 absolute top-10 left-10'><img src={menuVisible ? closeIcon : menuIcon} 
                       alt="메뉴" /></button>
                       <div className='bg-subBackground'>
                        <ul className={clsx(
                            'text-center transition-all  py-20 h-full', 
                            menuVisible ? 'block' : 'hidden'
                            )}>
                                <li className='p-7 '>
                                    <a href="#cover" className={gnbClass}>Home</a>
                                </li>
                                <li className='p-7'>
                                    <a href="#about" className={gnbClass}>About</a>
                                </li>
                                <li className='p-7'>
                                    <a href="#skills" className={gnbClass}>Skills</a>
                                </li>
                                <li className='p-7'>
                                    <a href="#project" className={gnbClass}>Project</a>
                                </li>
                            </ul>
                       </div>
                    </div>
                )}
            </div>
            {isMd && (
                <div className='w-full'>
                    <ul className='flex justify-center items-center gap-10 p-8 text-2xl'>
                        <li>
                            <a href='#cover' className="cover text-gnb transition-all hover:text-primary">〈 Home 〉</a>
                        </li>
                        <li>
                            <a href='#about' className="about text-gnb transition-all hover:text-primary">〈 About 〉</a>
                        </li>
                        <li>
                            <a href='#skills' className="skills text-gnb transition-all hover:text-primary">〈 Skills 〉</a>
                        </li>
                        <li>
                            <a href='#project' className="cover text-gnb transition-all hover:text-primary">〈 Project 〉</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
export default Header;