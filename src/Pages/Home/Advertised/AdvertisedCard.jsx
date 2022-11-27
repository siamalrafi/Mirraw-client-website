import React from 'react';

const AdvertisedCard = ({ myProduct }) => {
    const { _id, productName, price, description, condition, location, phone, productCategory, year } = myProduct;

    return (
        <div>
            <div className="card w-72 mt-5 bg-base-300 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">
                        Product Name :  {productName}
                    </h2>
                    <div className='flex justify-between'>
                        <p><b>location</b> {location}</p>
                        <p><b>Price</b> ${price}</p>
                        <p><b>Phone</b> {phone}</p>
                    </div>
                    <hr /><hr />
                    <div className='flex justify-between'>
                        <p> {year} <b>year</b></p>
                        <p> {condition} <b>Condition</b></p>
                        <h2 className="card-title">
                            {productCategory}
                        </h2>
                    </div>
                    <hr /><hr /><hr />
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedCard;