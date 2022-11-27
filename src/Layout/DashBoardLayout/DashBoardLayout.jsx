import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [userInformation, setUserInformation] = useState();


    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUserInformation(data);
            })
    }, [user?.email]);




    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="deshboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <div className="drawer-side">
                        <label htmlFor="deshboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                            {
                                userInformation?.userType === 'Seller' &&
                                <>
                                    <li><Link to={'/dashboard'}>My Products</Link></li>
                                    <li><Link to={'/dashboard/addproduct'}>Add Products</Link></li>
                                </>
                            }

                            {
                                userInformation?.userType === 'Buyer' &&
                                <li><Link to={'/dashboard/mybooking'}>My Booking</Link></li>
                            }

                            {
                                userInformation?.userType === 'Admin' &&
                                <>
                                    <li><Link to={'/dashboard/allbuyer'}>All Buyers</Link></li>
                                    <li><Link to={'/dashboard/allseller'}>All Seller</Link></li>
                                    <li><Link to={'/dashboard/reportedproducts'}>Reported Products</Link></li>
                                </>
                            }
                        </ul>
                    </div> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="deshboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {
                            userInformation?.userType === 'Seller' &&
                            <>
                                <li><Link to={'/dashboard'}>My Products</Link></li>
                                <li><Link to={'/dashboard/addproduct'}>Add Products</Link></li>
                            </>
                        }

                        {
                            userInformation?.userType === 'Buyer' &&
                            <li><Link to={'/dashboard/mybooking'}>My Booking</Link></li>
                        }

                        {
                            userInformation?.userType === 'Admin' &&
                            <>
                                <li><Link to={'/dashboard/allbuyer'}>All Buyers</Link></li>
                                <li><Link to={'/dashboard/allseller'}>All Seller</Link></li>
                                <li><Link to={'/dashboard/reportedproducts'}>Reported Products</Link></li>
                                <li><Link to={'/dashboard/reportedsellers'}>Reported Sellers</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default DashBoardLayout;