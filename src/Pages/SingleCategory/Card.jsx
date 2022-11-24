import { faCheck, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';

const Card = ({ product, setModalData, }) => {
    const { ProductName, picture, ResalePrice, about, location, originalPrice, phone, SellerType, sellerName, years } = product;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ProductName}</h2>
                    <div className='flex justify-between'>
                        <p><b>location</b> {location}</p>
                        <p><b>ResalePrice</b> ${ResalePrice}</p>
                        <p><b>OriginalPrice</b> ${originalPrice}</p>
                    </div>
                    <hr /><hr />
                    <div className='flex justify-between'>
                        <p>{years} <b>years used</b></p>
                        <h2 className="card-title">
                            {sellerName}!
                            <div className="badge badge-accent">
                                {
                                    SellerType === 'verified' ?
                                        <>
                                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                            {SellerType}</>
                                        :
                                        <>
                                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                            {SellerType}
                                        </>
                                }
                            </div>
                        </h2>
                    </div>
                    <hr /><hr /><hr />
                    <p className='text-center'>
                        <FontAwesomeIcon className='text-xl text-blue-800' icon={faPhone} />
                        {phone}</p>
                    <p >{about.slice(0, 100)}...</p>

                    <div className="card-actions justify-end">
                        <label
                            onClick={() => setModalData(product)}
                            htmlFor="booking-modal"
                            className="btn btn-primary btn-sm"
                        >Book now</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;