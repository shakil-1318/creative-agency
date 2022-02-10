import React from 'react';
import Contact from '../../Home/Contact/Contact';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: "Web & Mobile design",
        description: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
        img: "https://i.ibb.co/d4T860R/service1.png"
    },
    {
        id: 2,
        name: "Graphic design",
        description: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
        img: "https://i.ibb.co/NZr2m2F/service2.png"
    },
    {
        id: 3,
        name: "Web development",
        description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
        img: "https://i.ibb.co/fqDmyGj/service3.png"
    },
    {
        id: 4,
        name: "App Development",
        description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
        img: "https://i.ibb.co/4m1BfNZ/service5.png"
    },
    {
        id: 5,
        name: "Content Writing",
        description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
        img: "https://i.ibb.co/YQ2d8q2/service4.png"
    }
]

const CourseAvailable = ({ date }) => {

    return (
        <>
            <div class="container mx-auto my-12" id='services'>
                <h1 class='text-4xl text-center font-semibold mb-16'>Available Our <span class='text-green-600'>Courses {date.toDateString()}</span></h1>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-12 content-between">
                    {
                        bookings.map(booking => <Booking
                            key={booking.id}
                            booking={booking}
                            date={date}
                        ></Booking>)
                    }
                </div>
            </div>
            <Contact></Contact>
        </>

    );
};

export default CourseAvailable;