import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const SingleCategory = () => {
    const products = useLoaderData();





    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-8 justify-items-center'>
            {
                products?.map(product => <Card
                    product={product}
                    key={product._id}>
                </Card>
                )
            }
        </div>
    );
};

export default SingleCategory;