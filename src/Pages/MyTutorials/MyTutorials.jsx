import React from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import UseAuth from '../../Hooks/UseAuth';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyTutorials = () => {
    const axiosSecure = UseAxiosSecure();
    const { user } = UseAuth();

    const { data: tutor = [], isPending: loading, refetch } = useQuery({
        queryKey: ['tutor', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutorials/email/${user.email}`);
            return res.data;
        }
    });

    if (loading) {
        return <div className="loading loading-dots loading-lg text-center"></div>;
    }

    const handleDelete = async (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/tutorials/delete/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your tutorial has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className="overflow-x-auto w-10/12 mx-auto py-10">
            <table className="table min-w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100 text-gray-700">
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Language</th>
                        <th>Price</th>
                        <th className="w-1/4">Description</th>
                        <th>Review</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tutor.map((item, index) => (
                        <tr key={item._id} className="border-b">
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img src={item.image} alt="Avatar" />
                                    </div>
                                </div>
                            </td>
                            <td>{item.language}</td>
                            <td className="text-orange-400 font-bold">{item.price}$</td>
                            <td className="w-1/4">
                                <div className="h-12 overflow-y-auto p-1 bg-base-200 rounded text-justify">
                                    {item.description}
                                </div>
                            </td>
                            <td>{item.review}</td>

                            {/* Button Container - Fix Overflow */}
                            <td className="p-2">
                                <div className="flex flex-wrap gap-2 items-center">
                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-error btn-xs w-full md:w-auto"
                                    >
                                        Delete
                                    </button>

                                    {/* Update Button */}
                                    <Link to={`/updateCard/${item._id}`} className="w-full md:w-auto">
                                        <button className="btn bg-yellow-300 btn-xs w-full md:w-auto text-black">
                                            Update
                                        </button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyTutorials;
