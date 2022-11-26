import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedCard from './AdvertisedCard';

const Advertised = () => {

    const { data: advertised = [], refetch, isLoading } = useQuery({
        queryKey: ['advertised'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertised`)
            const data = await res.json();
            return data
        }
    });

    return (
        <div>
            <div className='text-center mt-16'>
                <h2 className='font-bold text-primary text-2xl uppercase'>Advertised Product</h2>
                <h3 className='text-3xl'>Advertised Products We Provide</h3>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-self-center">
                {
                    advertised?.map(adver => <AdvertisedCard
                        key={adver._id}
                        myProduct={adver}
                    ></AdvertisedCard>
                    )
                }

            </div>

        </div>

    );
};

export default Advertised;