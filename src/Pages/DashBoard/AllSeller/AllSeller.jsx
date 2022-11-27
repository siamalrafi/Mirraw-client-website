import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';



const AllSeller = () => {
    const { user } = useContext(AuthContext)


    const { data: allSellers = [], isLoading, refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seller/${user?.email}`)
            const data = await res.json();
            return data
        }
    });


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allSellers?.map(allSeller =>
                            <tr key={allSeller._id}>
                                <th>1</th>
                                <td>{allSeller?.name}</td>
                                <td>{allSeller?.email}</td>
                                <td>
                                    <button className='btn btn-sm btn-primary'>
                                        Make Admin
                                    </button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-primary'>
                                        Delete
                                    </button>
                                </td>
                            </tr>


                        )}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;