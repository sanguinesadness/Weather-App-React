import React from 'react'
import BriefInfoCard from './DetailedCards/BriefInfoCard'
import TemperatureCard from './DetailedCards/TemperatureCard'
import WindCard from './DetailedCards/WindCard'
import AirCard from './DetailedCards/AirCard'
import LocationCard from './DetailedCards/LocationCard'
import OtherCard from './DetailedCards/OtherCard'
import SelectedCityDateLabel from './SelectedCityDateLabel'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import MediaQuery, { useMediaQuery } from 'react-responsive'

const DetailedInfo = ({ forecast, city }) => {
    const lowHeight = useMediaQuery({ maxHeight: 820 });
    const wideScreen = useMediaQuery({ minWidth: 980 });
    const mediumScreen = useMediaQuery({ minWidth: 891, maxWidth: 979 });
    const smallScreen = useMediaQuery({ maxWidth: 890 });

    return (
        <div className="detailed-info__wrapper">
            {   
                forecast && city ?
                <div className="detailed-info">
                    {
                        lowHeight && wideScreen ?
                        <>
                            <div className="one-element-row">
                                <BriefInfoCard iconId={forecast.weather[0].icon}
                                    temperature={Math.round(parseInt(forecast.temp.max))}
                                    description={forecast.weather[0].description} />
                                <TemperatureCard temp={forecast.temp} feels_like={forecast.feels_like} />
                                <AirCard humidity={forecast.humidity} pressure={forecast.pressure} />
                                <LocationCard longitude={city.coord.lon} latitude={city.coord.lat} />
                                <WindCard speed={forecast.speed} direction={forecast.deg} gust={forecast.gust} />
                                <OtherCard clouds={forecast.clouds} precipitation={forecast.pop} />
                            </div>
                        </>
                        : wideScreen ?
                        <>
                            <div className="first row">
                                <BriefInfoCard iconId={forecast.weather[0].icon}
                                    temperature={Math.round(parseInt(forecast.temp.max))}
                                    description={forecast.weather[0].description} />
                                <TemperatureCard temp={forecast.temp} feels_like={forecast.feels_like} />
                                <WindCard speed={forecast.speed} direction={forecast.deg} gust={forecast.gust} />
                            </div>
                            <div className="second row">
                                <AirCard humidity={forecast.humidity} pressure={forecast.pressure} />
                                <LocationCard longitude={city.coord.lon} latitude={city.coord.lat} />
                                <OtherCard clouds={forecast.clouds} precipitation={forecast.pop} />
                            </div>
                        </>
                        : mediumScreen ?
                        <>
                            <div className="first row">
                                <BriefInfoCard iconId={forecast.weather[0].icon}
                                    temperature={Math.round(parseInt(forecast.temp.max))}
                                    description={forecast.weather[0].description} />
                                <TemperatureCard temp={forecast.temp} feels_like={forecast.feels_like} />
                            </div>
                            <div className="second row">
                                <AirCard humidity={forecast.humidity} pressure={forecast.pressure} />
                                <LocationCard longitude={city.coord.lon} latitude={city.coord.lat} />
                            </div>
                            <div className="third row">
                                <WindCard speed={forecast.speed} direction={forecast.deg} gust={forecast.gust} />
                                <OtherCard clouds={forecast.clouds} precipitation={forecast.pop} />
                            </div>
                        </>
                        : smallScreen ?
                        <div className="one-element-list">
                            <BriefInfoCard iconId={forecast.weather[0].icon}
                                temperature={Math.round(parseInt(forecast.temp.max))}
                                description={forecast.weather[0].description} />
                            <TemperatureCard temp={forecast.temp} feels_like={forecast.feels_like} />
                            <AirCard humidity={forecast.humidity} pressure={forecast.pressure} />
                            <LocationCard longitude={city.coord.lon} latitude={city.coord.lat} />
                            <WindCard speed={forecast.speed} direction={forecast.deg} gust={forecast.gust} />
                            <OtherCard clouds={forecast.clouds} precipitation={forecast.pop} />
                        </div>
                        : lowHeight ?
                        <>
                            <div className="one-element-row">
                                <BriefInfoCard iconId={forecast.weather[0].icon}
                                    temperature={Math.round(parseInt(forecast.temp.max))}
                                    description={forecast.weather[0].description} />
                                <TemperatureCard temp={forecast.temp} feels_like={forecast.feels_like} />
                                <AirCard humidity={forecast.humidity} pressure={forecast.pressure} />
                                <LocationCard longitude={city.coord.lon} latitude={city.coord.lat} />
                                <WindCard speed={forecast.speed} direction={forecast.deg} gust={forecast.gust} />
                                <OtherCard clouds={forecast.clouds} precipitation={forecast.pop} />
                            </div>
                        </>
                        :
                        <p>Unknown display size</p>
                    }
                </div>
                :
                <div className="error-message">
                    <BsFillInfoSquareFill className="icon"/>
                    <span className="text">
                        It seems that you didn't select the city and the day!
                        <br/>
                        Please go Home and do it.
                    </span>
                </div>
            }
        </div>
    )
}

export default DetailedInfo
