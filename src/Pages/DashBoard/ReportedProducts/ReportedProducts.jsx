import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Shared/Loading/Loading';

const ReportedProducts = () => {

    const { data: reportedProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['/reportedProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reportedProducts')
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDeleteProducts = (id) => {
        fetch(`http://localhost:5000/reportedProducts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, ' deleted');
                if (data.deletedCount === 1) {
                    toast.success('successfully deleted ');
                    refetch();
                }
            })
    }





    return (
        <div>
            <h1 className='text-center my-5 font-bold text-2xl'>
                Here is All Reported Products Details.
            </h1>
            <div className="divider font-bold my-5">Delete Reported Product</div>

            <div className='grid gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                {
                    reportedProducts?.map(reportedProduct =>
                        <div
                            key={reportedProduct._id}
                            className="card card-compact w-72 bg-base-100 shadow-xl">
                            <figure><img src={reportedProduct?.picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{reportedProduct?.ProductName}</h2>
                                <p>{reportedProduct?.about.slice(0, 200)}</p>
                                <p className='text-black text-xl'>Seller Name : {reportedProduct?.sellerName}</p>
                                <p className='text-black text-xl'>Seller Name : {reportedProduct?.phone}</p>
                                <div className="card-actions justify-end">
                                    <button
                                        onClick={() => handleDeleteProducts(reportedProduct?._id)}
                                        className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>








        </div>
    );
};

export default ReportedProducts;