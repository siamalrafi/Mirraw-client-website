import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import SellerCard from '../SellerCard/SellerCard';

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
    };

    return (
        <div>
            <h1 className='text-center my-5 font-bold text-2xl'>
                Here is My All Products.
            </h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-self-center">
                {
                    myProducts?.map(myProduct => <SellerCard
                        refetch={refetch}
                        key={myProduct._id}
                        myProduct={myProduct}>
                    </SellerCard>)
                }


            </div>
        </div>
    );
};

export default Seller;