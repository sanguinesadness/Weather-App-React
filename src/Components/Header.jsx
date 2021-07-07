import React from 'react'
import { useState } from 'react';

const Header = ({monthNames}) => {
    // initial DateTime values
    let dateNow = new Date();

    const date = extractDate(dateNow);
    const time = extractTime(dateNow);

    const [day, setDay] = useState(date.day);
    const [month, setMonth] = useState(monthNames[date.month]);

    const [hours, setHours] = useState(time.hours);
    const [minutes, setMinutes] = useState(time.minutes);
    const [dayPart, setDayPart] = useState(time.dayPart);

    // update DateTime values
    function updateDateTime() {
        dateNow = new Date();

        const date = extractDate(dateNow);
        const time = extractTime(dateNow);

        setDay(date.day);
        setMonth(monthNames[date.month]);
        setHours(time.hours);
        setMinutes(time.minutes);
        setDayPart(time.dayPart);
    }

    // extracts Time from Date object in appropriate format
    function extractTime(date) {
        const hours = date.toLocaleTimeString("en-US", { hour: "2-digit"});
        const minutes = date.toLocaleTimeString("en-US", { minute: "2-digit"});

        let hoursResult = hours.substring(0, 2);
        if (hoursResult.charAt(0) === "0") {
            hoursResult = hoursResult.substring(1);
        }

        let minutesResult = minutes;
        if (minutes < 10) {
            minutesResult = "0" + minutes;
        }

        const result = {
            hours: hoursResult,
            minutes: minutesResult,
            dayPart: hours.substring(hours.length - 2)
        };

        return result;
    }

    // extracts Date from Date object in appropriate format
    function extractDate(date) {
        const day = date.getDate();
        const month = date.getMonth();

        const result = {
            day: day,
            month: month
        };

        return result;
    }

    // update DateTime values every 1 sec
    setInterval(() => {
        updateDateTime();
    }, 1000);

    return (
        <header className="header">
            <h1>10 day forecast</h1>
            <h2 className="date-time">
                {month} {day}, {hours}<span className="separator">:</span>{minutes} {dayPart}
            </h2>
        </header>
    )
}

export default Header
