import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Card from './Card';

const SingleCategory = () => {
    const products = useLoaderData();
    const [modalData, setModalData] = useState();



    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-8 justify-items-center'>
                {
                    products?.map(product => <Card
                        product={product}
                        setModalData={setModalData}
                        key={product._id}>
                    </Card>
                    )
                }
            </div>



            {
                modalData && <BookingModal
                    modalData={modalData}
                    setModalData={setModalData}
                ></BookingModal>
            }

        </div>
    );
};

export default SingleCategory;