import { faTrafficLight } from '@fortawesome/free-solid-svg-icons';
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
                console.log(data);
            })
    }, [user?.email]);

    console.log(userInformation);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="deshboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="deshboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to={'/dashboard/buyer'}>Buyer </Link></li>
                        <li><Link to={'/dashboard/seller'}>Seller</Link></li>
                        <li><Link to={'/dashboard/admin'}> Admin </Link></li>
                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashBoardLayout;