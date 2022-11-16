import React from 'react';
import { format } from 'date-fns';


const BookingModal = ({ treatment, selected }) => {
    const { name, slots } = treatment;
    const data = format(selected, 'PP')

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{name}</h3>


                    <form className='grid grid-cols-1 gap-2'>
                        <input type="text" disabled value={data} className="input input-bordered w-full" />


                        <select className="select select-bordered w-full max-w-xs">
                            {
                                slots.length > 0 ?
                                    slots.map(slot =>
                                        <option
                                            key={slot}
                                        >{slot}</option>

                                    ) :
                                    <option>Try another day</option>
                            }
                        </select>

                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <br />
                        <input className='w-full btn' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;