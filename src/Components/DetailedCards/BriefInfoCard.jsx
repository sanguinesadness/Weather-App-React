import React from 'react'

const BriefInfo = ({iconId, temperature, description}) => {
    return (
        <div className="brief-info card">
            <img className="icon" src={`http://openweathermap.org/img/wn/${iconId}@4x.png`}></img>
            <span className="temp-block">
                <span className="temperature">{temperature}</span>
                <span className="info-label">max</span>
            </span>
            <span className="description">{description.charAt(0).toUpperCase() + description.slice(1)}</span>
        </div>
    )
}

export default BriefInfo
