import React from 'react'

const WindCard = ({ speed, direction, gust }) => {
    return (
        <div className="wind-info card no-hover">
            <span className="card-title">Wind</span>
            <table className="without-border">
                <tbody>
                    <tr>
                        <td>Speed:</td>
                        <td>{parseFloat(speed).toFixed(2)} m/sec</td>
                    </tr>
                    <tr>
                        <td>Direction:</td>
                        <td>{parseInt(direction)} °</td>
                    </tr>
                    <tr>
                        <td>Gust:</td>
                        <td>{parseFloat(gust).toFixed(2)} m/sec</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WindCard
