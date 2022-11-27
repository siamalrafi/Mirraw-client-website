import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';


const AllBuyer = () => {
    const { user } = useContext(AuthContext);

    const { data: allbuyers = [], isLoading, refetch } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/buyer/${user?.email}`)
            const data = await res.json();
            return data
        }
    });

    console.log(allbuyers, 'thei is hte');




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
                        {allbuyers?.map(allbuyer =>
                            <tr key={allbuyer._id}>
                                <th>1</th>
                                <td>{allbuyer?.name}</td>
                                <td>{allbuyer?.email}</td>
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

export default AllBuyer;