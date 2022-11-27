import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const SellerCard = ({ myProduct, refetch }) => {
    const { user } = useContext(AuthContext);
    const { _id, productName, price, description, condition, location, phone, productCategory, year } = myProduct;

    const advertiseProduct = myProduct;

    const handleProductAdv = () => {
        fetch('http://localhost:5000/advertised', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(advertiseProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your product will be advertised.')
                }

            })
    }



    const handleProductDelete = (id) => {
        fetch(`http://localhost:5000/myProducts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Your product has been deleted');
                    refetch();
                }
            });
    }


    return (
        <div>
            <div className="card w-80 mt-5 bg-base-300 shadow-xl">
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



                    <div className="mt-8 card-actions justify-between">
                        <button
                            onClick={() => handleProductAdv()}
                            className="btn btn-primary btn-sm">Advertised </button>

                        <button
                            onClick={() => handleProductDelete(_id)}
                            className="btn btn-primary btn-sm">Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SellerCard;