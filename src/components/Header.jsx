import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return(
        <div className='gnb w-full'>
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
    )
}
export default Header;