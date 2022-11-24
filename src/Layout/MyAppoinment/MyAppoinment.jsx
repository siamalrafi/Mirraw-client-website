import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyAppoinment = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },

            })
            const data = await res.json();
            return data;
        }
    })





    return (
        <div>
            <h2 className="text-3xl my-4">All Appointment</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((bookings, index) =>
                                <tr
                                    key={bookings?._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{bookings?.patient}</td>
                                    <td>{bookings?.treatment}</td>
                                    <td>{bookings?.appointmentDate}</td>
                                    <td>{bookings?.slot}</td>
                                    <td>
                                        {bookings?.price && !bookings?.paid && <Link
                                            to={`/dashboard/payment/${bookings?._id}`}>
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                        }
                                    </td>
                                    <td>
                                        {bookings?.price && bookings?.paid && <span
                                            className='btn btn-primary btn-sm'
                                        >Paid</span>
                                        }
                                    </td>
                                </tr>
                            )


                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;