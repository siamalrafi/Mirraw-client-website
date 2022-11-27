import React, { useEffect, useState } from 'react';
import Service from './Service';
import axios from 'axios';


const Categories = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/category')
            .then(res => {
                setServicesData(res.data);
            })
    }, []);



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