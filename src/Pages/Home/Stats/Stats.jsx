import React from 'react';
import CountUp from 'react-countup';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { GiTeacher } from 'react-icons/gi';
import { GoCodeReview } from 'react-icons/go';
import { MdLanguage } from 'react-icons/md';
import { GrLanguage } from 'react-icons/gr';
import { FaRegUser } from 'react-icons/fa';

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
        <div className='w-10/12 mx-auto py-14  '>
            {/* statics cards */}
            <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  px-5 '>


                {/* card 1 */}
                <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg  rounded-full ">


                    <div className="card-body  flex-grow-0">

                        <h2 className="card-title text-2xl justify-center font-bold text-black "> <CountUp end={tutor.length} />+</h2>

                        <h2 className="card-title text-sm justify-center text-slate-400 "> <span className='text-black'><GiTeacher /></span> Experienced Tutors</h2>
                    </div>
                </div>

                {/* card 2 */}
                <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg  rounded-full  ">


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

                <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg  rounded-full ">


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