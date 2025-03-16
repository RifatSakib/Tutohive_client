import React from 'react';
import Bg from "../../../assets/bg.png"
import Bg2 from "../../../assets/bg2.png"
import Bg3 from "../../../assets/bg3.png"
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

const Banner = () => {




    return (
     

            <div className='w-full mx-auto min-h-screen'>
                <div className="carousel w-full pb-0">

                    {/* slide 1 */}

                    <div id="slide1" className="carousel-item relative w-full pb-0">

                        <div className=' m-10 md:flex gap-4'>

                            <div data-aos="fade-up" data-aos-duration="3000" className='w-full  '>
                                <img className='max-w-[60%] object-cover ml-20 md:ml-32' src={Bg} alt="" />
                            </div>

                            <div  className='w-full space-y-5 my-auto  '>
                                <div data-aos="fade-up" data-aos-duration="3000" className='w-[80%] mx-auto space-y-5'>
                                    <h1  className=' font-bold'>Unlock Your Language Potential</h1>
                                    <h1 className='text-[#EF4444] text-4xl font-bold'>Learn from the Best Tutors</h1>
                                    <p className='text-slate-400 text-justify'>Discover a world of language learning with our expert tutors. Whether you're a beginner or looking to refine your skills, we have the right tutor for you. Start your journey today!</p>

                                    <div className='flex flex-row gap-3'>

                                    <Link to="/find-tutors">  <button className='btn bg-[#EF4444] rounded-none'>Find a Tutor </button></Link>
                                    </div>
                                </div>

                                

                            </div>

                        </div>




                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>



                    {/* slide 2 */}

                    <div id="slide2" className="carousel-item relative w-full ">

                        <div className='m-10 md:flex gap-4 p-4'>

                        <div data-aos="fade-up" data-aos-duration="3000" className='w-full'>
                                <img className='max-w-[80%] object-cover'  src={Bg2} alt="" />
                            </div>

                            <div className='w-full space-y-5 my-auto  '>
                                <div data-aos="fade-up" data-aos-duration="3000" className='w-[80%] mx-auto space-y-5'>
                                    <h1 className=' font-bold'>Flexible Learning at Your Fingertips</h1>
                                    <h1 className='text-[#EF4444] text-4xl font-bold'>Book Sessions Anytime, Anywhere</h1>
                                    <p className='text-slate-400 text-justify'>Enjoy the convenience of online tutoring. Schedule your sessions at times that work for you and learn from the comfort of your home. Your language journey starts here!</p>

                                    <div className='flex flex-row gap-3'>

                                    <Link to="/MyTutorials">  <button className='btn bg-[#EF4444] rounded-none'>Browse Tutorials</button></Link>
                                    </div>
                                </div>



                            </div>


                            

                        </div>



                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>


                    {/* slide 3 */}

                    <div id="slide3" className="carousel-item relative w-full">

                        <div className=' m-10 md:flex gap-4 p-4'>

                            <div data-aos="fade-up" data-aos-duration="3000" className='w-full'>
                                <img className='max-w-[80%] object-cover'  src={Bg3} alt="" />
                            </div>

                            <div className='w-full space-y-5 my-auto  '>
                                <div data-aos="fade-up" data-aos-duration="3000" className='w-[80%] mx-auto space-y-5'>
                                    <h1 className=' font-bold'>Join Our Language Community</h1>
                                    <h1 className='text-[#EF4444] text-4xl font-bold'>Connect, Learn, and Grow</h1>
                                    <p className='text-slate-400 text-justify'>Become part of a vibrant community of learners and tutors. Share experiences, practice together, and enhance your language skills in a friendly atmosphere. Sign up now!</p>

                                    <div className='flex flex-row gap-3'>

                                    <Link to="/find-tutors">  <button className='btn bg-[#EF4444] rounded-none'>Find a Tutor </button></Link>
                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>







                </div>

            </div>
     
    );
};

export default Banner;