import React from 'react';
import Banner from '../Banner/Banner';
 import InfoCards from '../InfoCards/InfoCards';
import Services from '../services/services';
import Treatment from '../Treatment/Treatment';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>

        </div>
    );
};

export default Home;