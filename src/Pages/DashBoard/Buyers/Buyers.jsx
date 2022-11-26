import React from 'react';

const Buyers = () => {


    return (
        <div>
            <h1 className='text-center my-5 font-bold text-2xl'>
                Here is My Booked Products
            </h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>ProductName</th>
                            <th>address</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Buyers;