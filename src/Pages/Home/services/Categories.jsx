import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Service from './Service';
import Loading from '../../../Shared/Loading/Loading'

const Categories = () => {

    const { data: servicesData = [], refetch, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category')
            const data = await res.json();
            return data
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='text-center mt-16'>
                <h2 className='text-xl font-bold text-primary text-2xl uppercase'>Product Categories</h2>
                <h3 className='text-3xl'>Product Categories We Provide</h3>
            </div>
            <div className='gap-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

                {
                    servicesData?.map(service => <Service
                        key={service.id}
                        service={service}
                    >
                    </Service>)
                }

            </div>


        </div>
    );
};

export default Categories;