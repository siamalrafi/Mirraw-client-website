import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyBooking = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`https://my-mirraw-server.vercel.app/bookings?email=${user?.email}`)
            const data = await res.json();
            return data
        }
    });


    const handleDelete = (id) => {
        fetch(`https://my-mirraw-server.vercel.app/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, ' deleted');
                if (data.deletedCount === 1) {
                    toast.success('successfully deleted ');
                    refetch();
                }
            })
    };




    return (
        <div>
            <h1 className='text-center my-5 font-bold text-2xl'>
                Here is My Booked Products
            </h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='font-bold'>No.</th>
                            <th className='font-bold'>Name</th>
                            <th className='font-bold'>ProductName</th>
                            <th className='font-bold'>address</th>
                            <th className='font-bold'>price</th>
                            <th className='font-bold text-center'>Decided</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking?.name}</td>
                                    <td>{booking?.ProductName}</td>
                                    <td>{booking?.address}</td>
                                    <td>{booking?.price}</td>

                                    <td className='flex justify-between'>
                                        <button
                                            className='btn btn-sm bg-green-900'>
                                            Pay
                                        </button>
                                        <button
                                            onClick={() => handleDelete(booking?._id)}
                                            className='btn text-orange-300 btn-sm'>
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyBooking;