import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';


const AvailableAppointment = ({ selected }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selected, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

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
                        refetch={refetch}
                    ></BookingModal>
                }

            </div>

        </div>
    );
};

export default AvailableAppointment;