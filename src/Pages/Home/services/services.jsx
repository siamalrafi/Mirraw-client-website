import React from 'react';
import Service from './Service';

const services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Kids jewellery',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: 'https://i.ibb.co/CWVXSwG/download-2.jpg'
        },
        {
            id: 2,
            name: 'Fassion jewellery',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: 'https://i.ibb.co/jzrYqLL/download-3.jpg'
        },
        {
            id: 3,
            name: 'Diamond',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: 'https://i.ibb.co/VYSWvpz/download-4.jpg'
        },
    ]




    return (
        <div>
            <div className='text-center mt-16'>
                <h2 className='text-xl font-bold text-primary text-2xl uppercase'>Product Categories</h2>
                <h3 className='text-3xl'>product categories We Provide</h3>
            </div>


            <div className='gap-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    >

                    </Service>)
                }

            </div>





        </div>
    );
};

export default services;