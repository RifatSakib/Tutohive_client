import React from 'react';
import logo1 from "../../../assets/react.svg"
import { Link } from 'react-router-dom';

const LanguageCategories = () => {



    const tutors = [
        { language: "English", teachers: 20195, icon: "🏛️" },
        { language: "Spanish", teachers: 6339, icon: "🏰" },
        { language: "French", teachers: 2595, icon: "🗼" },
        { language: "German", teachers: 1163, icon: "🏯" },
        { language: "Italian", teachers: 1743, icon: "🎭" },
        { language: "Chinese", teachers: 3286, icon: "🏮" },
        { language: "Arabic", teachers: 2288, icon: "🕌" },
        { language: "Japanese", teachers: 1524, icon: "🎌" },
        { language: "Portuguese", teachers: 1041, icon: "⛪" },
    ];
    return (


        <>

            <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-14">
                {tutors.map((tutor, index) => (

                    <Link to={`/find-tutors/${tutor.language}`} >
                        <div
                            key={index}
                            className="card bg-gradient-to-r from-blue-100 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-xl p-4 flex flex-row items-center justify-between hover:bg-base-200 cursor-pointer transition-all"
                        >

                            <div className="flex items-center gap-4">
                                <span className="text-2xl">{tutor.icon}</span>
                                <div>
                                    <h2 className="font-bold text-lg">{tutor.language} tutors</h2>
                                    <p className="text-sm text-gray-500">{tutor.teachers} teachers</p>
                                </div>
                            </div>
                            <div className="text-xl">➜</div>

                        </div> </Link>


                ))}





            </div>

        </>


















    );
};

export default LanguageCategories;