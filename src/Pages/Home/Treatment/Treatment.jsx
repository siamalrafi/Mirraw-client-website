import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div>
            <div className="hero py-5 px-20">
                <div className="hero-content flex-col justify-between lg:flex-row">
                    <img src={treatment} className="lg:w-1/2 sm:w-full h-96  rounded-lg shadow-2xl" alt='treatment' />
                    <div className='px-16'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms!</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;