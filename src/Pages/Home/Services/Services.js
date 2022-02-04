import React from 'react';
import Service from '../Service/Service';


// https://i.ibb.co/4m1BfNZ/service5.png
// https://i.ibb.co/YQ2d8q2/service4.png
// https://i.ibb.co/fqDmyGj/service3.png
// https://i.ibb.co/d4T860R/service1.png
// https://i.ibb.co/NZr2m2F/service2.png

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
    }
]

const Services = () => {
    return (
        <div class="container mx-auto my-5">
            <h1 class='text-4xl text-center font-bold mb-16'>provide awesome <span class='text-green-600'>services</span></h1>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-12 content-between">
                {
                    services.map(service => <Service
                        service={service}
                        key={service.name}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;