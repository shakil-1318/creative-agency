import React from 'react';


const services = [
    {
        name: "Web & Mobile design",
        description: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
        img: "https://i.ibb.co/d4T860R/service1.png"
    },
    {
        name: "Graphic design",
        description: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
        img: "https://i.ibb.co/NZr2m2F/service2.png"
    },
    {
        name: "Web development",
        description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
        img: "https://i.ibb.co/fqDmyGj/service3.png"
    },
    {
        name: "WEb Design",
        description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
        img: "https://i.ibb.co/4m1BfNZ/service5.png"
    },
    {
        name: "Content Writing",
        description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
        img: "https://i.ibb.co/YQ2d8q2/service4.png"
    }
]

const CourseAvailable = ({ date }) => {

    return (

        <div class="container mx-auto my-12" id='services'>
            <h1 class='text-4xl text-center font-semibold mb-16'>Available Our <span class='text-green-600'>Courses {date.toDateString()}</span></h1>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-12 content-between">
                {
                    services.map(service => <div key={service.name}>
                        <div class='text-center'>
                            <div className="card shadow-xl p-10 rounded-md bg-blue-300">
                                <img class='mx-auto w-1/4' src={service.img} alt="" />
                                <div className="card-body mt-5">
                                    <h1 class='text-black font-bold mb-2'>{service.name}</h1>
                                    <p >{service.description}</p>
                                </div>
                                <button class='bg-green-700 hover:bg-purple-600 mt-6 hover:ring-2 rounded-lg text-white px-6 py-2'>Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default CourseAvailable;