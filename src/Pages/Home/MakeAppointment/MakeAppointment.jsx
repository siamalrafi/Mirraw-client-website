import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryBtn from '../../../Components/PrimaryBtn';


const MakeAppointment = () => {
    return (
        <section className='mt-5'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 hidden md:block lg:block lg:w-1/2 rounded-lg shadow-2xl" alt='doctor-img' />
                    <div>
                        <h2 className="text-lg font-bold text-primary uppercase">Appointment</h2>
                        <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryBtn>APPOINTMENT</PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;