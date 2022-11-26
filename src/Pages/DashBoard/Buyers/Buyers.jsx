import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Buyer = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/bookings')
            const data = await res.json();
            return data
        }
    }); 


    return (
        <div>
            <h1 className='text-center my-5 font-bold text-2xl'>
                Here is My Booked Products
            </h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>ProductName</th>
                            <th>address</th>
                            <th>price</th>
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
                                </tr>
                            )
                        } 

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Buyer;