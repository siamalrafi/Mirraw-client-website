import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Seller = () => {
    const { user } = useContext(AuthContext);

    console.log(user.email);
    return (
        <div>
            <h1>sellers</h1>
            <h1>sellers</h1>
            <h1>sellers</h1>
        </div>
    );
};

export default Seller;