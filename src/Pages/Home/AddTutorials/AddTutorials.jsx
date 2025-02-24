import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaBicycle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { MdPostAdd } from 'react-icons/md';
import UseAxiosPublic from '../../../Hooks/UseAxiosPublic';

const AddTutorials = () => {
    const { user, logOut } = useContext(AuthContext);
    const { register, handleSubmit, reset, watch, setValue } = useForm();
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    const axiosSecure = UseAxiosSecure();
    const axiosPublic= UseAxiosPublic();

    console.log(user.photoURL);




    const onSubmit = async (data) => {

        console.log(data)



        const tutorialsItem = {
            name: data.name,
            email: data.email,
            tutor_image: user.photoURL,
            image: data.image,
            language: data.language,
            price: parseFloat(data.price),
            description: data.description,
            review: parseInt(data.review),

           
        }

        console.log(tutorialsItem);

        const tutorialsRes = await axiosSecure.post('/tutorials', tutorialsItem);
        console.log(tutorialsRes.data)


        

        if (tutorialsRes.data.insertedId) {
            // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.language} is added to the tutorial list.`,
                showConfirmButton: false,
                timer: 1000
            });
        }

    }

    return (
        <div className='w-8/12 mx-auto py-8'>
            <div className="text-center">
                <h1 className="text-5xl font-bold">Add Tutorials</h1>

            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-2'>
                {/* name */}
                <div className="form-control w-full my-1">

                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>

                    {

                        user && user?.displayName ? (

                            <input
                                readOnly
                                defaultValue={user.displayName}
                                type="text"
                                placeholder="Name"
                                {...register('name', { required: true })}

                                className="input input-bordered w-full" />

                        ) : (
                            <input
                                readOnly
                                type="text"
                                placeholder="Name (read-only)"
                                {...register('name', { required: true })}

                                className="input input-bordered w-full" />

                        )
                    }


                </div>

                {/* email */}
                <div className="form-control w-full my-1">

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>

                    {

                        user && user?.email ? (

                            <input
                                readOnly
                                defaultValue={user.email}
                                type="text"
                                placeholder="Email"
                                {...register('email', { required: true })}

                                className="input input-bordered w-full" />

                        ) : (
                            <input
                                readOnly
                                type="text"
                                placeholder="Email (read-only)"
                                {...register('email', { required: true })}

                                className="input input-bordered w-full" />

                        )
                    }


                </div>

                {/* image */}

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Image"
                        {...register('image', { required: true })}
                        className="input input-bordered w-full" />
                </div>



                {/* Language*/}

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Language</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Language"
                        {...register('language', { required: true })}
                        className="input input-bordered w-full" />
                </div>







                {/* price */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Price*</span>
                    </label>


                    <input
                        type="number"
                        placeholder="Price"
                        {...register('price', { required: true })}
                        className="input input-bordered w-full" />
                </div>

                {/* Description */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>


                    <input
                        type="text"
                        placeholder="Description"
                        {...register('description', { required: true })}
                        className="input input-bordered w-full" />
                </div>


                {/* Review */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>


                    <input
                        type="number"
                        readOnly
                        defaultValue={0}
                        placeholder="Review"
                        {...register('review', { required: true })}
                        className="input input-bordered w-full" />
                </div>


                

                <button className="btn btn-success col-span-2">
                    Submit  <MdPostAdd></MdPostAdd>

                </button>
            </form>
        </div>
    );
};

export default AddTutorials;