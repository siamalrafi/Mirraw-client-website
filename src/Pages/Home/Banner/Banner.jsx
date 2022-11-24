import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col max-w-lg lg:flex-row-reverse">
                    <img src='https://i.ibb.co/H22LkdC/download.jpg' className="lg:w-1/2 rounded-lg lg:h-72 shadow-2xl" alt='banner-img' />
                    <img src='https://i.ibb.co/X54qsGL/download.jpg' className="lg:w-1/2 rounded-lg lg:h-72 shadow-2xl" alt='banner-img' />
                    <img src='https://i.ibb.co/Wzkks5d/download-1.jpg' className="lg:w-1/2 rounded-lg lg:h-72 shadow-2xl" alt='banner-img' />

                    {/* 
                    
                     */}

                </div>
            </div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex justify-between">

                    <div className='grid grid-cols-3 gap-5 lg:block hidden'>
                        <div className='grid grid-cols-2 gap-5'>
                            <div>
                                <img src="https://i.ibb.co/dpNDTzY/download-1.jpg" className="mt-5 rounded-lg " alt='imgbannger' />
                                <img src="https://i.ibb.co/k1kYyLt/images.jpg" className="mt-5 rounded-lg " alt='imgbannger' />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/6DmYhPf/images-1.jpg" className="mt-5 rounded-lg " alt='imgbannger' />
                                <img src="https://i.ibb.co/nQ3RWyk/images-2.jpg" className="mt-5 rounded-lg " alt='imgbannger' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Sell Your Products and buy Best one!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;