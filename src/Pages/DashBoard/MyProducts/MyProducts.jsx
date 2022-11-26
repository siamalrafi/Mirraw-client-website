import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const Seller = () => {
    const { user } = useContext(AuthContext);

    const { data: myProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts?email=${user?.email}`)
            const data = await res.json();
            return data
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }


    console.log(myProducts);



    return (
        <div>
            <h1 className='text-center my-5 font-bold text-2xl'>
                Here is My All Products.
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
                            <th className='font-bold'>Delete Products</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Ganderton</td>
                            <td>Quality  </td>
                            <td>Blue</td>
                            <td>300</td>
                            <td className='flex justify-center'>
                                <button
                                    className='btn btn-sm'>
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Seller;