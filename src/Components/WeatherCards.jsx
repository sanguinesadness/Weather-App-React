import React from 'react'
import WeatherCard from './WeatherCard'
import ReactLoading from 'react-loading'
import { useState, useEffect } from 'react';
import { BsFillInfoSquareFill } from 'react-icons/bs'

const WeatherCards = ({apiKey, cityId, amount, monthNames, setSelectedCard, fetchData, currentForecast}) => {
    if (amount < 1) {
        amount = 1;
    }
    else if (amount > 16) {
        amount = 16;
    }

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (cityId > 0) {
            updateWeatherCards()
        }
    }, []);

    // get Forecast from OpenWeatherMap API
    async function fetchForecast() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?id=${cityId}&units=metric&cnt=${amount}&appid=${apiKey}`);
        return response.json();
    }

    async function updateWeatherCards() {
        let forecast;

        // if fetch is not needed then use current forecast info
        if (!fetchData && currentForecast) {
            forecast = currentForecast;
        }
        else {
            try {
                forecast = await fetchForecast();
            }
            catch(exception) {
                setCards(null);
                return;
            }
        }

        const cards = [];
        const dates = getFutureDates();

        for (let i = 0; i < amount; i++) {
            const card = {
                id: i,
                date: dates[i],
                forecast: forecast.list[i],
                specialDayName: isDateToday(dates[i]) ? "Today" : isDateTomorrow(dates[i]) ? "Tomorrow" : "",
                allInfo: forecast
            };

            cards.push(card);
        }

        setCards(cards);
        setLoading(false);
    }

    function getFutureDates() {
        var targetDate = new Date();

        const dates = [];

        for (let i = 0; i < amount; i++) {
            const date = {
                day: targetDate.getDate(),
                month: monthNames[targetDate.getMonth()],
                year: targetDate.getFullYear()
            };

            dates.push(date);

            targetDate.setDate(targetDate.getDate() + 1);
        }

        return dates;
    }

    function isDateToday(date) {
        const today = new Date();

        const day = today.getDate();
        const month = monthNames[today.getMonth()];
        const year = today.getFullYear();

        return day === date.day && month === date.month && year == date.year;
    }

    function isDateTomorrow(date) {
        const today = new Date();
        today.setDate(today.getDate() + 1);

        const day = today.getDate();
        const month = monthNames[today.getMonth()];
        const year = today.getFullYear();

        return day === date.day && month === date.month && year == date.year;
    }

    return (
        <div className="weather-cards__wrapper">
            {
                cityId <= 0 ?
                <div className="select-city-message">
                    <BsFillInfoSquareFill className="icon"/>
                    <span className="text">Select a city to view weather forecast.</span>
                </div>
                : !cards ?
                <div className="error-message">
                    <BsFillInfoSquareFill className="icon"/>
                    <span className="text">
                        Unknown error thrown.
                        <br/>
                        Please check your Internet connection and try again.
                    </span>
                </div>
                : loading ? 
                <ReactLoading type="bars" className="loading-spinner"/>
                :
                <div className="weather-cards">
                    {
                        cards.map(card =>
                            <WeatherCard key={card.id} card={card} setSelectedCard={setSelectedCard}/>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default WeatherCards
