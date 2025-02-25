import React from 'react';
import CountUp from 'react-countup';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Stats = () => {

    const axiosSecure = UseAxiosSecure();


    const { data: tutor = [], isLoading: loading,  } = useQuery({
        queryKey: ['tutor'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutor`);
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
        <div>
               {/* statics cards */}
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  px-5 '>


{/* card 1 */}
<div className="card glass bg-slate-100 ">
    

    <div className="card-body  flex-grow-0">
       
        <h2 className="card-title text-2xl justify-center font-bold "> <CountUp end={tutor.length} />+</h2>
        
        <h2 className="card-title text-sm justify-center text-slate-400 ">Experienced Tutors</h2>
    </div>
</div>

{/* card 2 */}
<div className="card glass bg-slate-100  ">
    

    <div className="card-body  flex-grow-0">
       
        <h2 className="card-title text-2xl justify-center font-bold "> <CountUp end={reviewData.totalReviews} />+</h2>
        
        <h2 className="card-title text-sm justify-center text-slate-400 ">Tutor's Review</h2>
    </div>
</div>

{/* card 3 */}
<div className="card glass bg-slate-100">
    

    <div className="card-body  flex-grow-0">
       
        <h2 className="card-title text-2xl justify-center font-bold "> <CountUp end={9} />+</h2>
        
        <h2 className="card-title text-sm justify-center text-slate-400 ">Total Languages</h2>
    </div>
</div>


{/* card 4 */}

<div className="card glass bg-slate-100 ">
    

    <div className="card-body  flex-grow-0">
       
        <h2 className="card-title text-2xl justify-center font-bold "> <CountUp end={users.length} />+</h2>
        
        <h2 className="card-title text-sm justify-center  text-slate-400">Total Users</h2>
    </div>
</div>


</div>
        </div>
    );
};

export default Stats;