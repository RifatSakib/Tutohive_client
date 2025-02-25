import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const FindTutorByCategory = () => {

    const { category } = useParams();
    const axiosSecure = UseAxiosSecure();

    const { data: book = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['tutorials', category],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutorials/${category}`); // Ensure this matches the server route
            return res.data; // Ensure this is an array
        }
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (book.length === 0) {
        return <div>No tutors found for this category.</div>;
    }
    return (
        <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 py-10 grid-grow'>
            {book.map(tutor => (
                <Link to={`/tutor/${tutor._id}`} key={tutor.id}  >
                    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md h-full flex flex-col">
                        <img className="rounded-t-lg flex-grow" src={tutor.tutor_image || "path/to/image.jpg"} alt={tutor.tutor_image} />
                        <div className="p-5 flex flex-col flex-grow">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900">
                                {tutor.name} <span className="text-gray-600">🌍</span>
                            </h5>
                            <span className="text-gray-600">{tutor.review} reviews</span>
                            <div className="mt-2 flex-grow">
                                <span className="text-gray-700">🗣️ {tutor.language}</span>
                            </div>

                            <div className="mt-4">


                                <button className="inline-block px-4 py-2 text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600">
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

export default FindTutorByCategory;