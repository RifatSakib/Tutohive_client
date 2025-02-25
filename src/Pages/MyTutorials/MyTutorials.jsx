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
        queryKey: ['tutor',user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutorials/email/${user.email}`);

            return res.data;
        }
    })


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
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (
        <div className="overflow-x-auto">
            <table className="table table-fixed w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Language</th>
                        <th>Price</th>
                        <th className="w-1/4">Description</th>
                        <th>Review</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {tutor.map((item, index) => (
                        <tr key={item._id}>
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

                            {/* Fixing Description Height */}
                            <td className="w-1/4">
                                <div className="h-12 overflow-y-auto p-1 bg-base-200 rounded text-justify">
                                    {item.description}
                                </div>
                            </td>

                            <td>
                                {item.review}
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-error btn-xs">
                                    Delete
                                </button>
                            </td>
                            <td>

                                <Link to={`/updateCard/${item._id}`}>

                                    <button className="btn  bg-yellow-300 btn-xs">Update</button>
                                </Link>
                                {/* <button onClick={() => handleUpdate(item)} className="btn btn-success btn-xs">
                                    Update
                                </button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyTutorials;