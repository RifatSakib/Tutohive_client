import React from 'react';
import CountUp from 'react-countup';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { GiTeacher } from 'react-icons/gi';
import { GoCodeReview } from 'react-icons/go';
import { MdLanguage } from 'react-icons/md';
import { GrLanguage } from 'react-icons/gr';
import { FaRegUser } from 'react-icons/fa';
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
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
const Stats = () => {

    const axiosSecure = UseAxiosSecure();


    const { data: tutor = [], isLoading: loading, } = useQuery({
        queryKey: ['tutorials'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutorials`);
            return res.data;
        }
    });


    const { data: users = [], isLoading: loading2, } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    });




    const { data: reviewData = { totalReviews: 0 } } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reviews/count`);
            return res.data;
        }
    });




    return (
        <div data-aos="zoom-in" data-aos-duration="3000" className='w-10/12 mx-auto py-14 pt-0  '>
            {/* statics cards */}
            <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  px-5 '>


                {/* card 1 */}
                <div  className="bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg  rounded-full ">


                    <div  className="card-body  flex-grow-0">

                        <h2 className="card-title text-2xl justify-center font-bold text-black "> <CountUp end={tutor.length} />+</h2>

                        <h2 className="card-title text-sm justify-center text-slate-400 "> <span className='text-black'><GiTeacher /></span> Experienced Tutors</h2>
                    </div>
                </div>

                {/* card 2 */}
                <div  className="bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg  rounded-full  ">


                    <div className="card-body  flex-grow-0">

                        <h2 className="card-title text-2xl justify-center font-bold text-black "> <CountUp end={reviewData.totalReviews} />+</h2>

                        <h2 className="card-title text-sm justify-center text-slate-400 "> <span className='text-black'><GoCodeReview />
                        </span>Tutor's Review</h2>
                    </div>
                </div>

                {/* card 3 */}
                <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg  rounded-full">


                    <div className="card-body  flex-grow-0">
 
                        <h2 className="card-title text-2xl justify-center font-bold text-black "> <CountUp end={9} />+</h2>

                        <h2 className="card-title text-sm justify-center text-slate-400 "><span className='text-black'><GrLanguage />
                        </span>Total Languages</h2>
                    </div>
                </div>


                {/* card 4 */}

                <div  className="bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg  rounded-full ">


                    <div className="card-body  flex-grow-0">

                        <h2 className="card-title text-2xl justify-center font-bold text-black "> <CountUp end={users.length} />+</h2>

                        <h2 className="card-title text-sm justify-center  text-slate-400"> <span className='text-black'><FaRegUser />
                        </span>Total Users</h2>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Stats;