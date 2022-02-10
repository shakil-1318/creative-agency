import React from 'react';
import notfound from '../../images/404.jpg'

const NotFound = () => {
    return (
        <section className='container mx-auto px-8'>
            <div className="grid grid-cols-1">
                <div className='flex justify-center align-middle'>
                    <img className='w-96' src={notfound} alt="" />
                </div>
            </div>
        </section>
    );
};

export default NotFound;