import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../images/me.jpg';

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-[#0a192f]"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
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
        </div>
    );
};
export default Home;