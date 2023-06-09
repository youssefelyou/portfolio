import React from 'react';
import { data } from "../data/certif.js";


const Certificates = () => {

    // projects file
    const project = data;
    //setProject(data);

    return (
        <div name='work' className='w-auto md:h-screen text-gray-300 '>
            <div className='max-w-[1000px] min-h-full mx-auto p-6 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600'>
                        Certificates
                    </p>
                    <p className='py-6'> These are the certificates i have obtained</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-4">

                    {/* Grid Item */}
                    {project.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md
              flex justify-center text-center items-center mx-auto content-div "
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-xl font bold text-white tracking-wider ">
        {item.name}
      </span>
                                <div className="pt-8 text-center ">
                                    {/* eslint-disable-next-line */}
                                    <a href={item.reference} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-500 font-bold text-lg"
                                        >
                                            Reference
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;