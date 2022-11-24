import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);

    return (
        <div>
            <h1 className='text-orange-900'>Something wrong</h1>
            <p className='text-orange-700'>{error.status || error.message}</p>

            <h1 className='text-red-600'>Please <button><Link onClick={() => logOut()}>Log Out</Link></button></h1>

        </div >
    );
};

export default DisplayError;