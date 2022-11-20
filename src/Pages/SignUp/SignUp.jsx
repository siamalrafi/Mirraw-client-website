import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../Hooks/UseToken';

const SignUp = () => {
    const notify = () => toast.success('Successfully signed up');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate();


    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        setSignUPError('');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                notify();
                const name = data.name;
                updateUser(name)
                    .then(() => {
                        saveUser(name, data.email);
                    }).catch((error) => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    };



    const saveUser = (name, email) => {
        const user = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
            });
    };


    // const getUserToken = (email) => {
    //     // fetch(`http://localhost:5000/jwt?email=${email}`)
    //     //     .then(res => res.json())
    //     //     .then(data => {
    //     //         if (data.accessToken) {
    //     //             localStorage.setItem('accessToken', data.accessToken)
    //     //          }
    //     //     })
    // }





    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
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
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default SignUp;