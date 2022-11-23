import { useQuery } from '@tanstack/react-query';
import { computeHeadingLevel } from '@testing-library/react';
import { data } from 'autoprefixer';
import React, { useState } from 'react';
import ConfirmModal from '../../../Shared/ConfirmModal/ConfirmModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState('');
    const { data: doctors, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors')
                const data = await res.json();
                // console.log(data);
                return data;
            }
            catch (error) {
                // console.log(error);;
            }
        }
    })

    const closeModal = () => {
        setDeletingDoctor(null)
    }

    const handleDeleteDoctor = (doctor) => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data);
                    refetch()
                }
            })
    }

    return (
        <div>
            <h1>ManageDoctorsManageDoctors</h1>
            <h1>{doctors?.length}</h1>
            <div className="lg:w-full sm:w-52 overflow-x-auto">
                <table className="table lg:w-full sm:w-52">

                    <thead>
                        <tr>
                            <th></th>
                            <th>AVATA</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors?.map((doctor, i) =>
                                <tr key={doctor._id} className="hover mt-2">
                                    <th>{i + 1}</th>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full  ring-offset-2">
                                            <img src={doctor?.url} alt='imge' />
                                        </div>
                                    </div>                                   <td>{doctor?.name}</td>
                                    <td>{doctor?.email}</td>
                                    <td>{doctor?.speciality}</td>
                                    <td>
                                        <label
                                            onClick={() => setDeletingDoctor(doctor)}
                                            htmlFor="confirmation-modal" className="btn btn-sm btn-warning">Delete</label>

                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {
                deletingDoctor &&
                <ConfirmModal
                    title={`Are you sure you want to delete?`}
                    massge={`If you want to delete ${deletingDoctor?.name}. It can not be undo.`}
                    successAction={handleDeleteDoctor}
                    successButtonName="Delete"
                    closeModal={closeModal}
                    modalData={deletingDoctor}
                ></ConfirmModal>
            }



        </div>
    );
};

export default ManageDoctors;