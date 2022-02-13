import React, { useState } from 'react';
import courses from '../../../images/courses.jpg'
import Calendars from '../../Shared/Calendar/Calendars';


const CourseHeader = ({ date, setDate }) => {

    return (
        <section class='container mx-auto px-4'>
            <h1 class='text-4xl text-center font-bold mb-16 pt-16'>We Provide <span class='text-green-600'>awesome services</span></h1>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 px-4 md:px-12 content-around items-center">
                <div>
                    <Calendars
                        date={date}
                        setDate={setDate}
                    ></Calendars>
                </div>
                <div>
                    <img src={courses} alt="" />
                </div>
            </div>
        </section>
    );
};

export default CourseHeader;