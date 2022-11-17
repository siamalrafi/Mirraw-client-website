import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const BookingModal = ({ treatment, setTreatment, selected, refetch }) => {
    const notify = () => toast.success('Successfully Booking.');
    const { user } = useContext(AuthContext);
    const { name, slots } = treatment;
    const date = format(selected, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();

        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone
        };

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setTreatment(null);
                    notify();
                    refetch();
                }
            })


    }



    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{name}</h3>

                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-2'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map(slot => <option key={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Name" className="input input-bordered w-full" />
                        <input name='email' defaultValue={user?.email} disabled type="text" placeholder="email Number" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input className='w-full btn' type="submit" value="Submit" />
                        <Toaster />
                    </form>


                </div>
            </div>
        </>
    );
};

export default BookingModal;