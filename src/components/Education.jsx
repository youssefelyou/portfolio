
import { Card } from 'primereact/card';
import React from "react";


export default function Education() {

    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-600 mb-100 '>Education</p>
                </div>
                <div className="mt-5 pb-4 border-4 border-blue-600">
                    <Card  >
                        <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        </div>
                        <p className="text-center font-semibold mt-5" >
                            2022-2024 : Software Enginnering at École Marocaine des Sciences de l'Ingénieur
                        </p>
                        <p className="text-center font-semibold mt-5" >
                            I am continuing my studies to get my engineering degree at <span className="text-amber-200"> EMSI </span> School,
                            where I am thirsty to enhance my skills either in the technical side or the managerial side.
                        </p>
                    </Card>
                </div>
                <div className="mt-8 pb-4 border-4 border-blue-600">
                    <Card  >
                        <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        </div>
                        <p className="text-center font-semibold mt-5" >
                            2017-2021 : Computer Science Bachelor Degree at Faculty of Sciences and Technology
                        </p>
                        <p className="text-center font-semibold mt-5" >
                            I graduated with computer science bachelor degree in 2021 from  <span className="text-amber-200"> Faculty of Sciences and Technology </span>"FST",Marrakech</p>
                        <p className="text-center font-semibold mt-5" >
                            where I gained a solid foundation in programming languages.
                        </p>
                    </Card>
                </div>
            </div>

        </div>
    );
}