import React from 'react';

import Angular from '../images/angular.png'
import JavaScript from '../images/javascript.png';
import ReactImg from '../images/react.png';
import Node from '../images/node.png';
import Spring from '../images/spring-boot.png';
import Flutter from '../images/flutter.png';
import Net from '../images/.net.png';
import Csharp from '../images/csharp.png';
import Django from '../images/django.png';
import Java from '../images/java.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-600 '>Skills</p>
                    <p className='py-4'> These are the technologies I have worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Spring} alt="HTML icon" />
                        <p className='my-4'>SPRING BOOT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Angular} alt="HTML icon" />
                        <p className='my-4'>ANGULAR</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                        <p className='my-4'>JAVA</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Flutter} alt="HTML icon" />
                        <p className='my-4'>FLUTTER</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Net} alt="HTML icon" />
                        <p className='my-4'>.NET</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Django} alt="HTML icon" />
                        <p className='my-4'>DJANGO</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Csharp} alt="HTML icon" />
                        <p className='my-4'>C#</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;