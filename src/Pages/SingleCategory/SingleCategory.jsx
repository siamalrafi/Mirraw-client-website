import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Card from './Card';

const SingleCategory = () => {
    const products = useLoaderData();
    const [modalData, setModalData] = useState();

    /*     useEffect(() => {
            fetch(`http://localhost:5000/category/id?`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }, [])
     */


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