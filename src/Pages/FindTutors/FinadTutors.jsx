import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const FinadTutors = () => {

    const { category } = useParams();
    const axiosSecure = UseAxiosSecure();


    const { data: book = [], isLoading: loading, isError, error } = useQuery({
        queryKey: ['tutorials', category],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutorials`);
            return res.data;
        }
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data: {error.message}</div>;
    }

    if (book.length === 0) {
        return <div>No tutors found for this category.</div>;
    }

    return (
        <div className=' w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 py-10'>
            {book.map(tutor => (
                <Link to={`/tutor/${tutor._id}`} key={tutor.id}  >
                    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md h-full flex flex-col">
                        <img className="rounded-t-lg h-52 object-cover" src={tutor.tutor_image || "path/to/image.jpg"} alt={tutor.tutor_image} />
                        <div className="p-5 flex flex-col flex-grow">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900">
                                {tutor.name} <span className="text-gray-600">🌍</span>
                            </h5>
                            <span className="text-gray-600"> <span className='font-bold'>{tutor.review}</span> reviews</span>
                            <div className="mt-2 flex-grow">
                                <span className="text-gray-700 font-bold">🗣️ {tutor.language}</span>
                            </div>

                            <div className="mt-4">


                                <button className="w-full inline-block px-4 py-2 font-bold text-center text-black bg-red-400 rounded-lg hover:bg-red-500">
                                    Details
                                </button>


                            </div>

                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default FinadTutors;