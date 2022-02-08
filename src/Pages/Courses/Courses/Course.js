import React, { useState } from 'react';
import Header from '../../Shared/Header/Header'
import CourseAvailable from '../CourseAvailable/CourseAvailable';
import CourseHeader from '../CourseHeader/CourseHeader';

const Course = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Header></Header>
            <CourseHeader date={date} setDate={setDate}></CourseHeader>
            <CourseAvailable date={date}></CourseAvailable>
        </div>
    );
};

export default Course;