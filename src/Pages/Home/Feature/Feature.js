import React from 'react';
import feature1 from '../../../images/carousel-1.png'
import feature2 from '../../../images/carousel-2.png'
import feature3 from '../../../images/carousel-4.png'

const Feature = () => {
    return (
        <section class='bg-slate-900 py-16 mt-16'>
            <div class="container mx-auto px-8">
                <h1 class='mb-12 text-center text-4xl text-white'>Here are some of <span class='text-green-600'>our works</span></h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <img src={feature1} alt="" />
                    </div>
                    <div>
                        <img src={feature2} alt="" />
                    </div>
                    <div>
                        <img src={feature3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;