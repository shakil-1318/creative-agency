import React from 'react';

const Service = (props) => {
    console.log(props.service.name)
    return (
        <div class='text-center'>
            <div className="card shadow-xl p-10 rounded-md">
                <img class='mx-auto w-1/4' src={props.service.img} alt="" />
                <div className="card-body mt-5">
                    <h1 class='text-black font-bold mb-2'>{props.service.name}</h1>
                    <p >{props.service.description}</p>
                </div>
                <button class='bg-blue-500 hover:bg-purple-600 mt-6 ring-2 rounded-lg text-white px-6 py-2'>Buy Now</button>
            </div>
        </div>
    );
};

export default Service;