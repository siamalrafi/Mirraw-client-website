import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="lg:px-32 hero-content gap-8 flex-col lg:flex-row">
                    <img src="https://placeimg.com/260/400/arch" className="lg:w-1/4 rounded-lg shadow-2xl" alt='treatment-img'/>
                    <div className='lg:px-10'>
                        <h1 className="text-5xl lg:font-bold sm:font-semibold">Exceptional Dental Care, on Your Terms!</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;