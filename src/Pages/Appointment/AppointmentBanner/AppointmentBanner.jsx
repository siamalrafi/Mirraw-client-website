import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = () => {
    const [selected, setSelected] = useState(new Date());


    return (
        <div>

            <div className="hero lg:px-16 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='banner-img' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        ></DayPicker>

                        <p>You have selected Date : {format(selected, 'PP')}</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default AppointmentBanner;