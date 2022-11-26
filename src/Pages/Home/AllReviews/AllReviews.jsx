import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const AllReviews = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Robin Hasan',
            review: 'It is a Very good platform to selling and buy Second hand products.It is a survey of previously published research on a topi.',
            img: people1,
            location: 'Dhaka',
            rating: 5
        },
        {
            _id: 2,
            name: 'Mita Moni',
            review: 'It is a Very good platform to selling and buy Second hand products.It is a survey of previously published research on a topi.',
            img: people2,
            location: 'Kotalia',
            rating: 4
        },
        {
            _id: 3,
            name: 'Taposi Akter',
            review: 'It is a Very good platform to selling and buy Second hand products.It is a survey of previously published research on a topi.',
            img: people3,
            location: 'Barisal',
            rating: 5
        },
    ]




    return (
        <section className='my-16 ' >

            <div className=' text-center my-10'>
                <h2 className="text-3xl text-center text-primary font-bold">Some Reviews</h2>
                <p className='text-4xl '>What Our customer Says</p>
            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>

                {
                    reviews.map(review => <Review
                        key={review._id}
                        reviewData={review}>
                    </Review>)
                }

            </div>
        </section>
    );
};

export default AllReviews;