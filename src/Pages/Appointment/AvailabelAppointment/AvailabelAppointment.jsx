import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';



const AvailableAppointment = ({ selected }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);

    useState(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, []);

    return (
        <div>
            <h2 className="text-2xl text-secondary text-center py-5 font-bold">Available Appointment {format(selected, 'PP')}</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    appointmentOptions.map(option =>
                        <AppointmentOption
                            key={option._id}
                            option={option}
                        >
                        </AppointmentOption>)
                }
            </div>

        </div>
    );
};

export default AvailableAppointment;