import React from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const TutorDetails = () => {
    const { id } = useParams();
    const axiosSecure = UseAxiosSecure();


    const { data: tutor = [], isLoading: loading, isError, error } = useQuery({
        queryKey: ['tutor', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutor/${id}`);
            return res.data;
        }
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data: {error.message}</div>;
    }

    if (tutor.length === 0) {
        return <div>No tutors found for this category.</div>;
    }

    return ( <div>
  
     
                <div className="max-w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-md h-full flex flex-col">
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
   
          </div>
    );
};

export default TutorDetails;