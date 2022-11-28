import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../services/Categories';
import Faq from '../AllReviews/Faq';
import AllReviews from '../AllReviews/AllReviews';
import Advertised from '../Advertised/Advertised';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Categories
            ></Categories>
            <Advertised></Advertised>
            <AllReviews
            ></AllReviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;