import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';



const AvailableAppointment = ({ selected }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('http://localhost:5000/appointmentOptions')
            .then(res => res.json())

    })



    // useState(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, []);





    return (
        <div>
            <h2 className="text-2xl text-secondary text-center py-5 font-bold">Available Appointment {format(selected, 'PP')}</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    appointmentOptions.map(option =>
                        <AppointmentOption
                            key={option._id}
                            option={option}
                            setTreatment={setTreatment}
                        >
                        </AppointmentOption>)
                }

            </div>
            <div>
                {
                    treatment &&
                    <BookingModal
                        treatment={treatment}
                        setTreatment={setTreatment}
                        selected={selected}
                    ></BookingModal>
                }

            </div>

        </div>
    );
};

export default AvailableAppointment;