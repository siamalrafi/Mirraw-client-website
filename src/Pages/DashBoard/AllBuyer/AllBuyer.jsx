import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';


const AllBuyer = () => {
    const { user } = useContext(AuthContext);


    const { data: allbuyers = [], isLoading, refetch } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seller`)
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }


    const handleDeleteBuyer = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/buyer/${id}`, {
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
                Here is All Seller.
            </h1>
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
                        {allbuyers?.map((allbuyer, i) =>
                            <tr key={allbuyer._id}>
                                <th>{i + 1}</th>
                                <td>{allbuyer?.name}</td>
                                <td>{allbuyer?.email}</td>
                                <td>
                                    <button className='btn btn-sm btn-primary'>
                                        Make Admin
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteBuyer(allbuyer._id)}
                                        className='btn btn-sm btn-primary'>
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