import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendars = ({ date, setDate }) => {

    const onChange = (date) => {
        setDate(date)
    }
    return (
        <div>
            <Calendar onChange={onChange} value={date} />
            {console.log(date)}
        </div>
    );
};

export default Calendars;