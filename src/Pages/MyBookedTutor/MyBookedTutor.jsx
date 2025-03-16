import React from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import UseAuth from '../../Hooks/UseAuth';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';


const MyBookedTutor = () => {

    const axiosSecure = UseAxiosSecure();
    const { user } = UseAuth();



    // const { data: tutor = [], isPending: loading, refetch } = useQuery({
    //     queryKey: ['tutor'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/tutor`);
           
    //         return res.data;
    //     }
    // })

     const { data: tutor = [], isPending: loading, refetch } = useQuery({
            queryKey: ['tutor',user.email],
            queryFn: async () => {
                const res = await axiosSecure.get(`/tutor/email/${user.email}`);
    
                return res.data;
            }
        })
    

    if (loading) {
        return <div className="loading loading-dots loading-lg text-center"></div>;
    }

    const handleReview = async (item) => {
       console.log(item._id)

       try {
        // Update order status
        await axiosSecure.patch(`/tutorials/review/${item.tutorId}`);
        
        refetch(); 

        // Show success message
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `review Updated`,
            showConfirmButton: false,
            timer: 1500
        });
    } catch (err) {
        console.error(err);
        toast.error(err.response?.data || "An error occurred");
    }

    };



    return (
        <div className="overflow-x-auto w-10/12 mx-auto py-10">
            <table className="table min-w-full border-collapse">
                {/* head */}
                <thead>
                    <tr className="bg-gray-100">
                        <th>
                            #
                        </th>

                        <th>Name</th>
                        <th>Image</th>
                        <th>Language</th>
                        <th>Price</th>
                        <th>Review</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tutor.map((item, index) =>
                        <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {item.name}
                            </td>

                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src={item.image}
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>


                            </td>
                            <td>
                                {item.language}
                            </td>
                            <td className='text-orange-400 font-bold'>{item.price}$</td>
                            <th>
                                <button

                                    onClick={() => handleReview(item)}

                                    className="btn btn-error btn-xs">
                                    review


                                </button>
                            </th>
                        </tr>

                    )}


                </tbody>

            </table>
        </div>
    );
};

export default MyBookedTutor;