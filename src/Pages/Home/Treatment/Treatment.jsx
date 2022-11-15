import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryBtn from '../../../Components/PrimaryBtn';

const Treatment = () => {
    return (
        <div>
            <div className="hero">
                <div className="lg:p-20 hero-content gap-5 flex-col lg:flex-row">
                    <img src={treatment} className="lg:w-1/3 rounded-lg shadow-2xl" alt='treatment-img' />
                    <div className='lg:px-10'>
                        <h1 className="text-3xl lg:font-bold sm:font-semibold">Exceptional Dental Care, on Your Terms!</h1>
                        <p className="py-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <PrimaryBtn>Get Started</PrimaryBtn>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;