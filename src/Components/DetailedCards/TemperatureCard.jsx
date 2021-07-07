import React from 'react'
import { FiSunrise, FiSun, FiSunset, FiMoon } from 'react-icons/fi'

const TemperatureTable = ({temp, feels_like}) => {
    return (
        <div className="temperature-info card">
            <table className="temperature-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Temp, °C</th>
                        <th>Feels like, °C</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="with-icon">
                            <FiSunrise/>
                            <span>Morning</span>
                        </td>
                        <td>{parseInt(temp.morn)}</td>
                        <td>{parseInt(feels_like.morn)}</td>
                    </tr>
                    <tr>
                        <td className="with-icon">
                            <FiSun/>
                            <span>Day</span>
                        </td>
                        <td>{parseInt(temp.day)}</td>
                        <td>{parseInt(feels_like.day)}</td>
                    </tr>
                    <tr>
                        <td className="with-icon">
                            <FiSunset/>
                            <span>Evening</span>
                        </td>
                        <td>{parseInt(temp.eve)}</td>
                        <td>{parseInt(feels_like.eve)}</td>
                    </tr>
                    <tr>
                        <td className="with-icon">
                            <FiMoon/>
                            <span>Night</span>
                        </td>
                        <td>{parseInt(temp.night)}</td>
                        <td>{parseInt(feels_like.night)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TemperatureTable
