import React from 'react'
import testIcon from '../Icons/test.svg'
import settings from '../../package.json'
import { Link } from 'react-router-dom';

const WeatherCard = ({ card, setSelectedCard }) => {
    const appGitName = settings['git-name'];

    return (
        <Link to={`/${appGitName}/detailed`} className="weather-card card" onClick={() => setSelectedCard(card)}>
            <img className="icon" src={`http://openweathermap.org/img/wn/${card.forecast.weather[0].icon}@4x.png`}></img>
            <span className="info">
                <span className="temperature">{Math.round(parseInt(card.forecast.temp.max))}</span>
                <span className="day">
                    {card.specialDayName ? card.specialDayName : `${card.date.day} ${card.date.month}`}
                </span>
            </span>
        </Link>
    )
}

export default WeatherCard
