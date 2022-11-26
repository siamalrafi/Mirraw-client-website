import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Buyer = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [], isLoading, refetch } = useQuery({
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
                            <th className='font-bold'>No.</th>
                            <th className='font-bold'>Name</th>
                            <th className='font-bold'>ProductName</th>
                            <th className='font-bold'>address</th>
                            <th className='font-bold'>price</th>
                            <th className='font-bold'>Delete</th>
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
                                    <td>

                                        <button className='btn btn-sm'>
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

export default Buyer;