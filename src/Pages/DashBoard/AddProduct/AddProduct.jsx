import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUPError] = useState('');


    const handleAddProducts = (data) => {
        const addProductInfo = {
            productName: data.productname,
            price: data.price,
            condition: data.condition,
            phone: data.phone,
            location: data.location,
            productCategory: data.productcategory,
            description: data.description,
            year: data.year,
        }





    }


    return (
        <div>
            <h1>AddProduct</h1>
            <form onSubmit={handleSubmit(handleAddProducts)}>


                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center lg:gap-10 md:gap-6 sm:gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("productname", {
                            required: "Product Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Price</span></label>
                        <input type="number" {...register("price", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <select
                            {...register("condition", {
                                required: true
                            })}
                            className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Phone Number</span></label>
                        <input type="number" {...register("phone", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Category</span></label>
                        <select
                            {...register("productcategory", {
                                required: true
                            })}
                            className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Kids jewellery</option>
                            <option>Fassion jewellery</option>
                            <option>Diamond</option>
                        </select>
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <input type="text" {...register("description", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Year of Purchase</span></label>
                        <input type="number" {...register("year", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                </div>

                <input className='btn btn-primary w-full mt-4' value="Add Product" type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
                {/* <Toaster /> */}
            </form>
        </div>
    );
};

export default AddProduct;