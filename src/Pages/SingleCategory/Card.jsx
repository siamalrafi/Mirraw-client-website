import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Card = ({ product }) => {
    const { ProductName, picture, ResalePrice, about, location, originalPrice, phone, SellerType, sellerName, years } = product;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ProductName}!</h2>
                    <div className='flex justify-between'>
                        <p>location {location}</p>
                        <p>ResalePrice ${ResalePrice}</p>
                        <p>OriginalPrice ${originalPrice}</p>
                    </div>
                    <hr /><hr />
                    <div className='flex justify-between'>
                        <p>{years} years used</p>
                        <h2 className="card-title">
                            {sellerName}!
                            <div className="badge badge-accent">{SellerType}</div>
                        </h2>
                    </div>
                    <hr /><hr /><hr />
                    <p className='text-center'>
                        <FontAwesomeIcon className='text-xl text-blue-800' icon={faPhone} />
                        {phone}</p>
                    <p >{about.slice(0, 100)}...</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;