// src/components/Calendar/Calendar.js
import React from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

const MyCalendar = () => {
    return (
        <div className="calendar-container">
            <Calendar className="react-calendar" />
        </div>
    );
};

export default MyCalendar;
