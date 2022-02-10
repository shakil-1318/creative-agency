import React from 'react';

const Contact = () => {
    return (
        <>
            <section class='bg-yellow-300 pt-16 mt-16'>
                <div class="container mx-auto px-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                        <div class='w-full'>
                            <h1 class='text-3xl font-bold'>Let us handle your project, professionally.</h1>
                            <p class='pt-4 text-slate-800'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                        <div class="">
                            <input class='w-full mb-3 p-3 rounded-md focus:outline-none focus:ring focus:border-blue-500' type="email" name="email" placeholder='Your email address' id="" /><br />
                            <input class='w-full mb-3 p-3 rounded-md focus:outline-none focus:ring focus:border-blue-500 ...' type="text" placeholder='Your name / companies name' /><br />
                            <textarea class='w-full rounded-md p-3 focus:outline-none focus:ring focus:border-blue-500 ...' name="" id="" cols="5" rows="5" placeholder='Your message'></textarea>
                            <button class='focus:ring bg-black text-white px-6 py-2 mt-2  rounded'>Send me</button>
                        </div>

                    </div>
                </div>
                <p class='text-center font-semibold pt-14 pb-8'>copyright Orange labs 2020</p>
            </section>
        </>
    );
};

export default Contact;