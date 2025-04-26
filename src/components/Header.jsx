import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import menuIcon from '../images/menu_icon.png';
import closeIcon from '../images/close_icon.png';
import useIsMd from '../hooks/useIsMd';
function Header() {
    const isMd = useIsMd();
    const gnbClass = clsx(
        'text-white text-4xl hover:text-gnbHover transition '
      );
    const [menuVisible, setMenuVisible] = useState(false);
    const menuOpenToggle = () => {
        setMenuVisible(!menuVisible);
    }
      
    return(
        <div>
            <div className='p-3'>
                {!isMd && (
                    <div>
                        <button onClick={menuOpenToggle} className='z-20 absolute'><img src={menuVisible ? closeIcon : menuIcon} 
                       alt="메뉴" /></button>
                       <div className=' absolute z-10 left-0 top-0  w-full h-full '>
                        <ul className={clsx(
                            'text-center transition-all bg-subText py-20 h-full', 
                            menuVisible ? 'block' : 'hidden'
                            )}>
                                <li className='p-7 '>
                                    <Link to="/" className={gnbClass}>Home</Link>
                                </li>
                                <li className='p-7'>
                                    <Link to="/About" className={gnbClass}>About</Link>
                                </li>
                                <li className='p-7'>
                                    <Link to="/Skills" className={gnbClass}>Skills</Link>
                                </li>
                                <li className='p-7'>
                                    <Link to="/Project" className={gnbClass}>Project</Link>
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
                            <Link to="/" className="cover text-gnb">〈 Home 〉</Link>
                        </li>
                        <li>
                            <Link to="/About" className="about text-gnb">〈 About 〉</Link>
                        </li>
                        <li>
                            <Link to="/Skills" className="skills text-gnb">〈 Skills 〉</Link>
                        </li>
                        <li>
                            <Link to="/Project" className="cover text-gnb">〈 Project 〉</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
export default Header;