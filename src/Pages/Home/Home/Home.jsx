import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../services/Categories';
import Faq from '../Testimonial/Faq';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Categories></Categories>
            <Testimonial></Testimonial>
            <Faq></Faq>
        </div>
    );
};

export default Home;