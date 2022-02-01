import React from 'react';
import slack from '../../../images/logos/slack.png'
import netflix from '../../../images/logos/netflix.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import airbnb from '../../../images/logos/airbnb.png'

const Brand = () => {
    return (
        <div>
            <section className="brand container mx-auto">
                <div class='grid grid-cols-2 md:grid-cols-5 items-center px-10 md:px-16 py-10 md:py-16'>
                    <div >
                        <img class='w-9/12' src={slack} alt="" />
                    </div>
                    <div>
                        <img class='w-9/12' src={google} alt="" />
                    </div>
                    <div>
                        <img class='w-9/12' src={netflix} alt="" />
                    </div>
                    <div>
                        <img class='w-9/12' src={uber} alt="" />
                    </div>
                    <div >
                        <img class='w-9/12' src={airbnb} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brand;