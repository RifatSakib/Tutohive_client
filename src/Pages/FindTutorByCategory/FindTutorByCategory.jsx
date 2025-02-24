import React from 'react';
import { useParams } from 'react-router-dom';
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
        <div>
        {book.map((item) => (
            <div key={item._id}>
                <h1>Tutors for {item.language}</h1>
                <p>Name: {item.name}</p>
                <p>Email: {item.email}</p>
                <p>Price: {item.price}</p>
                <p>Description: {item.description}</p>
                <p>Review: {item.review}</p>
                <img src={item.image} alt={`${item.name}'s profile`} />
            </div>
        ))}
    </div>
    );
};

export default FindTutorByCategory;