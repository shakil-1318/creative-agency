import React from 'react';

const SingleReview = (props) => {
    const { name, company, image, description } = props.review
    return (
        <div>
            <div className="card border-2 mr-0 md:mr-4 mb-4 md:mb-0 px-6 py-6">
                <div className="card-wrapper flex items-center mb-3">
                    <div className="card-img w-20">
                        <img class='w-full m-0' src={image} alt="" />
                    </div>
                    <div className="card-title ml-4">
                        <h2 class='font-bold text-xl'>{name}</h2>
                        <h3 class='font-semibold'>{company}</h3>
                    </div>
                </div>
                <div className="card-body">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;