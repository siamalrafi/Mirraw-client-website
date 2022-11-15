import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: Fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]




    return (
        <div>
            <div className='text-center mt-16'>
                <h2 className='text-xl font-bold text-primary uppercase'>Our Services</h2>
                <h3 className='text-3xl'>Services We Provide</h3>
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