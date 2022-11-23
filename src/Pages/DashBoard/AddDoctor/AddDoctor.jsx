import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUPError] = useState('');
    const imgeHostKey = process.env.REACT_APP_imge_apiKey;

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpeciality`)
            const data = await res.json();
            return data;
        }
    })




    const handleSignUp = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgeHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgeData => {
                if (imgeData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        url: imgeData.data.url
                    }
                    // save information about doctor
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            navigator('/dashboard/managedoctors')
                        })
                }
            })

    }




    return (
        <div>
            <h2 className="text-3xl my-4">Add Doctor</h2>
            <form onSubmit={handleSubmit(handleSignUp)} >
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <select {...register("speciality", {
                        required: true
                    })} className="select select-bordered w-full max-w-xs">

                        {
                            specialties?.map((speciality, i) => <option key={i}>{speciality.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="file" {...register("image", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <input className='btn btn-accent mt-4 w-full max-w-xs' value="Add Doctor" type="submit" />
                {signUpError && <p className='text-center text-red-600'>{signUpError}</p>}
            </form>
        </div>
    );
};

export default AddDoctor;