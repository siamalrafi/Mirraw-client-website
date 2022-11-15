import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            location: 'California'
        },
    ]




    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h2 className="text-3xl text-primary font-bold">Testimonial</h2>
                    <p className='text-4xl '>What Our Patients Says</p>
                </div>
                <figure >
                    <img className='w-24 lg:w-48' src={quote} alt="img" />
                </figure>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
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

export default Testimonial;