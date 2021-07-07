import React from 'react'

const LocationCard = ({ longitude, latitude }) => {
    return (
        <div className="location-info card">
            <span className="card-title">Location</span>
            <table className="without-border">
                <tbody>
                    <tr>
                        <td>Longitude:</td>
                        <td>{parseFloat(longitude).toFixed(4)}</td>
                    </tr>
                    <tr>
                        <td>Latitude:</td>
                        <td>{parseFloat(latitude).toFixed(4)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LocationCard