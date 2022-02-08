import React from 'react';

const Service = (props) => {
    const { name, img, description } = props.service
    return (
        <div class='text-center'>
            <div className="card shadow-xl p-10 rounded-md">
                <img class='mx-auto w-1/4' src={img} alt="" />
                <div className="card-body mt-5">
                    <h1 class='text-black font-bold mb-2'>{name}</h1>
                    <p >{description}</p>
                </div>
                <button class='bg-green-700 hover:bg-purple-600 mt-6 hover:ring-2 rounded-lg text-white px-6 py-2'>Buy Now</button>
            </div>
        </div>
    );
};

export default Service;