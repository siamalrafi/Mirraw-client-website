import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ modalData, }) => {
    // const mookingToast = () => toast.success('Booking confirmed');
    // const mookingToastError = () => toast.error('Error! Please try again');
    const { user } = useContext(AuthContext);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const price = form.price.value;
        const ProductName = form.ProductName.value;

        const booking = {
            name: name,
            email: email,
            address: location,
            ProductName: ProductName,
            price: price,
        }

        fetch('https://my-mirraw-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                }
                else {
                    toast.error('Error! Please try again');
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">
                        { }
                    </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name="name" type="text"
                            defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email"
                            defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered"
                            defaultValue={modalData?.location} required />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered"
                            defaultValue={modalData?.phone} required />
                        <input name='ProductName' type="text" className="input w-full input-bordered "
                            defaultValue={modalData?.ProductName} disabled />
                        <input name='price' type="text" className="input w-full input-bordered "
                            defaultValue={modalData?.ResalePrice} disabled />
                        <br />
                        <input disableded
                            className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;