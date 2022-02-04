import React from 'react';
import nash from '../../../images/customer-1.png'
import miriam from '../../../images/customer-2.png'
import bria from '../../../images/customer-3.png'
import SingleReview from '../SingleReview/SingleReview';

// https://i.ibb.co/THqFvGQ/customer-1.png
// https://i.ibb.co/w61htkt/customer-2.png
// https://i.ibb.co/BGFcC15/customer-3.png


const reviews = [
    {
        id: "1",
        name: "Nash Patrik",
        company: "CEO, Manpol",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
        image: "https://i.ibb.co/THqFvGQ/customer-1.png"
    },
    {
        id: "2",
        name: "Miriam Barron",
        company: "CEO, Manpol",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
        image: "https://i.ibb.co/w61htkt/customer-2.png"
    },
    {
        id: "3",
        name: "Bria Malone",
        company: "CEO, Manpol",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
        image: "https://i.ibb.co/BGFcC15/customer-3.png"
    }
]

const Review = () => {
    return (
        <section>
            <div className="container mx-auto px-4 py-16">
                <h1 class='text-4xl text-zinc-700 pb-12 font-semibold text-center'>Clients <span class='text-green-600'>Feedback</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {
                        reviews.map(review => <SingleReview
                            key={review.id}
                            review={review}
                        ></SingleReview>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;