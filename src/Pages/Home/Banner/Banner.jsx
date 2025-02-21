import React from 'react';
import Bg from "../../../assets/bg.png"
import Bg2 from "../../../assets/bg2.png"
const Banner = () => {
    return (
        <div className='hero min-h-screen'>
            
            <div className='w-11/12 mx-auto mt-10'>
        <div className="carousel w-full">

            {/* slide 1 */}

            <div id="slide1" className="carousel-item relative w-full">

                <div className='md:flex gap-4 p-4'>

                    <div className='w-full'>
                        <img src={Bg} alt="" />
                    </div>

                    <div className='w-full space-y-5 my-auto  '>
                        <div className='w-[80%] mx-auto space-y-5'>
                            <h1 className=' font-bold'>Unlock Your Language Potential</h1>
                            <h1 className='text-[rgb(70,206,190)] text-4xl font-bold'>Learn from the Best Tutors</h1>
                            <p className='text-slate-400 text-justify'>Discover a world of language learning with our expert tutors. Whether you're a beginner or looking to refine your skills, we have the right tutor for you. Start your journey today!</p>

                            <div className='flex flex-row gap-3'>

                                <button className='btn btn-accent rounded-none'>Find a Tutor </button>
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

            <div id="slide2" className="carousel-item relative w-full">

                <div className='md:flex gap-4 p-4'>



                    <div className='w-full space-y-5 my-auto  '>
                        <div className='w-[80%] mx-auto space-y-5'>
                            <h1 className=' font-bold'>Flexible Learning at Your Fingertips</h1>
                            <h1 className='text-[rgb(70,206,190)] text-4xl font-bold'>Book Sessions Anytime, Anywhere</h1>
                            <p className='text-slate-400 text-justify'>Enjoy the convenience of online tutoring. Schedule your sessions at times that work for you and learn from the comfort of your home. Your language journey starts here!</p>

                            <div className='flex flex-row gap-3'>

                                <button className='btn btn-accent btn-outline rounded-none'>Browse Tutorials</button>
                            </div>
                        </div>



                    </div>


                    <div className='w-full'>
                        <img src={Bg2} alt="" />
                    </div>

                </div>



                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>


            {/* slide 3 */}

            <div id="slide3" className="carousel-item relative w-full">

                <div className='md:flex gap-4 p-4'>

                    <div className='w-full'>
                        <img src={Bg} alt="" />
                    </div>

                    <div className='w-full space-y-5 my-auto  '>
                        <div className='w-[80%] mx-auto space-y-5'>
                            <h1 className=' font-bold'>Join Our Language Community</h1>
                            <h1 className='text-[rgb(70,206,190)] text-4xl font-bold'>Connect, Learn, and Grow</h1>
                            <p className='text-slate-400 text-justify'>Become part of a vibrant community of learners and tutors. Share experiences, practice together, and enhance your language skills in a friendly atmosphere. Sign up now!</p>

                            <div className='flex flex-row gap-3'>

                                <button className='btn btn-accent rounded-none'>Get Started</button>
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
        </div>
    );
};

export default Banner;