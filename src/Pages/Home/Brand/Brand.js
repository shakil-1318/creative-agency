import React from 'react';
import slack from '../../../images/logos/slack.png'
import netflix from '../../../images/logos/netflix.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import airbnb from '../../../images/logos/airbnb.png'

const Brand = () => {
    return (
        <div>
            <section className="brand container mx-auto px-4 md:px-8 py-10 md:py-16">
                <div class='grid grid-cols-2 gap-4 md:grid-cols-5 items-center '>
                    <div >
                        <img class='w-9/12 mx-auto' src={slack} alt="" />
                    </div>
                    <div>
                        <img class='w-9/12 mx-auto' src={google} alt="" />
                    </div>
                    <div>
                        <img class='w-9/12 mx-auto' src={netflix} alt="" />
                    </div>
                    <div>
                        <img class='w-9/12 mx-auto' src={uber} alt="" />
                    </div>
                    <div >
                        <img class='w-9/12 mx-auto' src={airbnb} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brand;