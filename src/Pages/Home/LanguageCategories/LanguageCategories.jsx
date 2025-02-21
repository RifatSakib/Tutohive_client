import React from 'react';
import logo1 from "../../../assets/react.svg"

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

      


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 py-10">
                {tutors.map((tutor, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 shadow-xl p-4 flex flex-row items-center justify-between hover:bg-base-200 cursor-pointer transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-2xl">{tutor.icon}</span>
                            <div>
                                <h2 className="font-bold text-lg">{tutor.language} tutors</h2>
                                <p className="text-sm text-gray-500">{tutor.teachers} teachers</p>
                            </div>
                        </div>
                        <div className="text-xl">➜</div>
                    </div>
                ))}




 {/* <div className="card bg-neutral text-neutral-content  p-0 m-0">
                <div className="card-body items-center text-center p-0 m-0">

                    <div className='grid grid-cols-3  items-center gap-4 p-0 m-0'>
                        <div >
                            <img src={logo1} alt="" />
                        </div>
                        <div >
                            <h2 className="card-title">Cookies!</h2>
                            <p>We are using cookies for no reason.</p>
                        </div>
                        <div >
                            <img src={logo1} alt="" />
                        </div>

                    </div>


                </div>
            </div> */}

            </div>




           





   





    );
};

export default LanguageCategories;