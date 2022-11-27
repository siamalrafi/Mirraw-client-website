import React from 'react';

const ReportedSeller = () => {
    return (
        <div>
            <h1 className='text-center my-5 font-bold text-2xl'>
                Here is All Sellers
            </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th> 1</th>
                            <td>Seller11</td>
                            <td>seller11@gmail.com</td>
                            <td>Verified</td>
                            <td>
                                <button
                                    className='btn btn-sm btn-primary'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr >
                            <th> 1</th>
                            <td>Seller22</td>
                            <td>seller22@gmail.com</td>
                            <td>Verified</td>
                            <td>
                                <button
                                    className='btn btn-sm btn-primary'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedSeller;