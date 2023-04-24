import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,

} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>

            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/education'>Education</a>
                </li>
                <li>
                    <a href='/Certificates'>Certificates</a>
                </li>
                <li>
                    <a href='/skills'>Skills</a>
                </li>
                <li>
                    <a href='/work'>Projects</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <a href='/'>Home</a>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <a href='/education'>Education</a>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <a href='/certificates'>Certificates</a>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <a href='/skills'>Skills</a>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <a href='/work'>Projects</a>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <a href='/contact'>Contact</a>
                </li>
            </ul>

            {/* Social icons */}
            <div className='flex lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/youssef-elyourizi-32b877190/'
                            target="_blank"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/youssefelyou'
                            target="_blank"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;