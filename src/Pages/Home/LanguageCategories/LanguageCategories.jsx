import React from 'react';
import logo1 from "../../../assets/react.svg"
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});




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

            <div data-aos="fade-up" data-aos-duration="3000" className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-14">
                {tutors.map((tutor, index) => (

                    <Link to={`/find-tutors/${tutor.language}`} >
                        <div
                            key={index}
                            className="card bg-gradient-to-r from-blue-100 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-xl p-4 flex flex-row items-center justify-between hover:bg-base-200 cursor-pointer transition-all"
                        >

                            <div className="flex items-center gap-4">
                                <span className="text-2xl">{tutor.icon}</span>
                                <div>
                                    <h2 className="font-bold text-lg text-black">{tutor.language} tutors</h2>
                                    <p className="text-sm text-gray-500">{tutor.teachers} teachers</p>
                                </div>
                            </div>
                            <div className="text-xl text-black">➜</div>

                        </div> </Link>


                ))}





            </div>

        </>


















    );
};

export default LanguageCategories;