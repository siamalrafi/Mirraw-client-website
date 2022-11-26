import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Review = ({ reviewData }) => {
    const { name, review, img, rating, location } = reviewData;


    return (
        <div>
            <div className="card mt-4  bg-base-200 shadow-xl">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div> <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={img} alt='' />
                                </div>
                            </div>
                            <div className='m-3'>
                                <h1 className='text-lg'>{name}</h1>
                                <p>{location}</p>
                            </div>
                        </div></div>
                        <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <p className='text-center'>{rating}</p>
                        </div>
                    </div>

                    <p>{review}</p>

                </div>
            </div>



        </div>
    );
};

export default Review;