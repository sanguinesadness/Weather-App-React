import React from 'react'
import testIcon from '../Icons/test.svg'
import { Link } from 'react-router-dom';

const WeatherCard = ({ card, setSelectedCard }) => {
    return (
        <Link to="/detailed" className="weather-card card" onClick={() => setSelectedCard(card)}>
            <img className="icon" src={`http://openweathermap.org/img/wn/${card.forecast.weather[0].icon}@4x.png`}></img>
            <span className="temperature">{Math.round(parseInt(card.forecast.temp.max))}</span>
            <span className="day">
                {card.specialDayName ? card.specialDayName : `${card.date.day} ${card.date.month}`}
            </span>
        </Link>
    )
}

export default WeatherCard
