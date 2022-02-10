import React, { useState } from 'react';
import BookingCourse from '../BookingCourse/BookingCourse';

const Booking = ({ booking, date }) => {
    const { name, img, description } = booking;
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <div class='text-center'>
                <div className="card shadow-xl p-10 rounded-md">
                    <img class='mx-auto w-1/4' src={img} alt="" />
                    <div className="card-body mt-5">
                        <h1 class='text-black font-bold uppercase mb-2'>{name}</h1>
                        <p >{description}</p>
                        <button
                            onClick={() => {
                                setShowModal(true);
                            }}
                            class="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            {showModal && <BookingCourse
                booking={booking}
                date={date}
                setOpenModal={setShowModal}
            ></BookingCourse>}
        </div>
    );
};

export default Booking;