import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailabelAppointment/AvailabelAppointment';


const Appointment = () => {
    const [selected, setSelected] = useState(new Date());



    return (
        <div>

            <AppointmentBanner
                selected={selected}
                setSelected={setSelected}
            ></AppointmentBanner>
            <AvailableAppointment
                selected={selected} 
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;