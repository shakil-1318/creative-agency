import React from 'react';
import banner from '../../../images/logos/Frame.png'
import './Banner.css'

const Banner = () => {
    return (
        <div class='bg-yellow-400 banner-polyfon pt-8 md:pt-8'>
            <div class='container mx-auto md:flex items-center py-10 px-4 md:px-8'>
                <div class=''>
                    <h1 class='text-3xl md:text-5xl leading-normal font-bold '>Let’s Grow Your
                        Brand To The
                        Next Level</h1>
                    <p class='text-xl py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, doloribus nisi labore atque quia alias?</p>
                    <button class='px-5 py-2 rounded-lg bg-black text-slate-50'>Hire Us</button>
                </div>
                <div class='w-full mx-auto'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;