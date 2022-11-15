import React from 'react';


const Review = ({ reviewData }) => {
    const { name, review, img, location } = reviewData;


     return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body">
                    <p>{review}</p>
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='' />
                            </div>
                        </div>
                        <div className='m-3'>
                            <h1 className='text-lg'>{name}</h1>
                            <p>{location}</p>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Review;