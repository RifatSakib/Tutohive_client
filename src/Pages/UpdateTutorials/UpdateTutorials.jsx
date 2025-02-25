import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MdPostAdd } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const UpdateTutorials = () => {
    const params = useParams();
    const { register, handleSubmit, reset, setValue } = useForm();
    const axiosSecure = UseAxiosSecure();

    const { data: tutor = {}, isPending: loading, refetch } = useQuery({
        queryKey: ['tutor', params.id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tutorials/update/${params.id}`);
            return res.data;
        },
        enabled: !!params.id // Ensures the query only runs when ID is available
    });

    // Use useEffect to set the form values once tutor data is fetched
    useEffect(() => {
        if (tutor) {
            setValue("name", tutor.name || "");
            setValue("email", tutor.email || "");
            setValue("tutor_image", tutor.tutor_image || "");
            setValue("image", tutor.image || "");
            setValue("language", tutor.language || "");
            setValue("price", tutor.price || 0);
            setValue("description", tutor.description || "");
            setValue("review", tutor.review || 0);
        }
    }, [tutor, setValue]);

    if (loading) {
        return <div className="loading loading-dots loading-lg text-center"></div>;
    }

    const onSubmit = async (data) => {
        const tutorialsItem = {
            name: data.name,
            email: data.email,
            tutor_image: data.tutor_image,
            image: data.image,
            language: data.language,
            price: parseFloat(data.price),
            description: data.description,
            review: parseInt(data.review),
        };

        try {
            const tutorialsRes = await axiosSecure.put(`/tutorials/update/${params.id}`, tutorialsItem);
            
            if (tutorialsRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.language} has been updated successfully.`,
                    showConfirmButton: false,
                    timer: 1000
                });
                reset();
                refetch();
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "No changes were made.",
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        } catch (error) {
            console.error("Update failed:", error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Something went wrong while updating!",
                showConfirmButton: false,
                timer: 1000
            });
        }
    };

    return (
        <div className='w-8/12 mx-auto py-8'>
            <div className="text-center">
                <h1 className="text-5xl font-bold">Update Tutorials</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-2'>
                {/* Name */}
                <div className="form-control w-full my-1">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input readOnly type="text" {...register('name')} className="input input-bordered w-full" />
                </div>

                {/* Email */}
                <div className="form-control w-full my-1">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input readOnly type="text" {...register('email')} className="input input-bordered w-full" />
                </div>

                {/* Tutor Image */}
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Tutor Image</span></label>
                    <input type="text" {...register('tutor_image')} className="input input-bordered w-full" />
                </div>

                {/* Language */}
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Language</span></label>
                    <input type="text" {...register('language')} className="input input-bordered w-full" />
                </div>

                {/* Price */}
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Price</span></label>
                    <input type="number" {...register('price')} className="input input-bordered w-full" />
                </div>

                {/* Description */}
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Description</span></label>
                    <input type="text" {...register('description')} className="input input-bordered w-full" />
                </div>

                {/* Review */}
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Review</span></label>
                    <input readOnly type="number" {...register('review')} className="input input-bordered w-full" />
                </div>

                {/* Tutorial Image */}
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Tutorial Image</span></label>
                    <input type="text" {...register('image')} className="input input-bordered w-full" />
                </div>

                <button className="btn btn-success col-span-2">
                    Update <MdPostAdd />
                </button>
            </form>
        </div>
    );
};

export default UpdateTutorials;
