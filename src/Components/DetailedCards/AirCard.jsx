import React from 'react'

const AirCard = ({ humidity, pressure }) => {
    return (
        <div className="air-info card no-hover">
            <span className="card-title">Air</span>
            <table className="without-border">
                <tbody>
                    <tr>
                        <td>Humidity:</td>
                        <td>{parseInt(humidity)}%</td>
                    </tr>
                    <tr>
                        <td>Pressure:</td>
                        <td>{parseFloat(pressure)} hPA</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AirCard
