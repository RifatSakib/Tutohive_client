import React, { useState } from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import UseAuth from '../../Hooks/UseAuth';
import { useQuery } from '@tanstack/react-query';

const MyBookedTutor = () => {

    const axiosSecure = UseAxiosSecure();
    const { user } = UseAuth();
    const [selectedItem, setSelectedItem] = useState(null); // State to hold the selected item



    const { data: tutor = [], isPending: loading, refetch } = useQuery({
        queryKey: ['tutor'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutor`);
            return res.data;
        }
    })

    const handleReview = (item) => {
        setSelectedItem(item); // Set the selected item
       
    };



    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
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