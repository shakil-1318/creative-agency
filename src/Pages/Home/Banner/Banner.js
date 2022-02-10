import React from 'react';
import banner from '../../../images/logos/Frame.png'
import './Banner.css'

const Banner = () => {
    return (
        <div class='bg-yellow-300 banner-polyfon pt-8 md:pt-8'>
            <div class='container mx-auto px-4 md:px-6 '>
                <div class=' md:flex items-center gap-8  py-8 md:py-10'>
                    <div class='mb-8 md:mb-0'>
                        <h1 class='text-3xl md:text-5xl leading-normal font-bold '>Let’s Grow Your
                            Brand To The
                            Next Level</h1>
                        <p class='text-xl py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, doloribus nisi labore atque quia alias?</p>
                        <button class='px-6 py-2 hover:ring hover:bg-slate-600 rounded bg-black text-slate-50'>Hire Us</button>
                    </div>
                    <div class='w-full mx-auto'>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;