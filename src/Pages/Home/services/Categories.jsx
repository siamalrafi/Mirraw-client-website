import React, { useEffect, useState } from 'react';
import Service from './Service';

const Categories = () => {
    const [servicesData, setServicesData] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                setServicesData(data)
                // console.log(data);
            })
    }, [])


    return (
        <div>
            <div className='text-center mt-16'>
                <h2 className='text-xl font-bold text-primary text-2xl uppercase'>Product Categories</h2>
                <h3 className='text-3xl'>product categories We Provide</h3>
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