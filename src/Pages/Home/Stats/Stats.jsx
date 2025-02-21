import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
    return (
        <div>
               {/* statics cards */}
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  px-5 '>


{/* card 1 */}
<div className="card glass bg-slate-100 ">
    

    <div className="card-body  flex-grow-0">
       
        <h2 className="card-title text-2xl justify-center font-bold "> <CountUp end={31200} />+</h2>
        
        <h2 className="card-title text-sm justify-center text-slate-400 ">Experienced Tutors</h2>
    </div>
</div>

{/* card 2 */}
<div className="card glass bg-slate-100  ">
    

    <div className="card-body  flex-grow-0">
       
        <h2 className="card-title text-2xl justify-center font-bold "> <CountUp end={213} />+</h2>
        
        <h2 className="card-title text-sm justify-center text-slate-400 ">Tutor's Review</h2>
    </div>
</div>

{/* card 3 */}
<div className="card glass bg-slate-100">
    

    <div className="card-body  flex-grow-0">
       
        <h2 className="card-title text-2xl justify-center font-bold "> <CountUp end={22} />+</h2>
        
        <h2 className="card-title text-sm justify-center text-slate-400 ">Total Languages</h2>
    </div>
</div>


{/* card 4 */}

<div className="card glass bg-slate-100 ">
    

    <div className="card-body  flex-grow-0">
       
        <h2 className="card-title text-2xl justify-center font-bold "> <CountUp end={32141} />+</h2>
        
        <h2 className="card-title text-sm justify-center  text-slate-400">Total Users</h2>
    </div>
</div>


</div>
        </div>
    );
};

export default Stats;