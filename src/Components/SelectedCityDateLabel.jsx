import React from 'react'

const SelectedCityDateLabel = ({ cityName, date }) => {
    return (
        <h4 className="selected-city-date">
            <span className="city-name">
                {cityName ? cityName : "No city selected"}
            </span>
            <span className="separator"> — </span>
            <span className="date">
                {date ? `${date.month} ${date.day}, ${date.year}` : "No card selected"}
            </span>
        </h4>
    )
}

export default SelectedCityDateLabel
