import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-blue-800'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    YOUSSEF ELYOURIZI
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                    Software Engineering Student.
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                   Currently I am continuing my studies at EMSI School.I am passionate about building excellent software that improves
                    the lives of those around me. I specialize in creating software
                    for clients ranging from individuals and small-businesses all the
                    way to large enterprise corporations.
                </p>
            </div>
        </div>
    );
};

export default Home;